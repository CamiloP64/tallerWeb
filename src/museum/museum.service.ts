/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { MuseumEntity } from './museum.entity';
import { MuseumsQueryDto } from './museums-query.dto';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';

@Injectable()
export class MuseumService {
  constructor(
    @InjectRepository(MuseumEntity)
    private readonly museumRepository: Repository<MuseumEntity>,
  ) {}

  private buildQuery(qb: SelectQueryBuilder<MuseumEntity>, query: MuseumsQueryDto) {
    const { name, city, foundedBefore } = query;

    if (name) {
      qb.andWhere('LOWER(museum.name) LIKE LOWER(:name)', { name: `%${name}%` });
    }
    if (city) {
      qb.andWhere('LOWER(museum.city) LIKE LOWER(:city)', { city: `%${city}%` });
    }
    if (typeof foundedBefore === 'number') {
      // OJO: nombre exacto de la columna (ver tu entidad)
      qb.andWhere(`museum."foundedBefore" < :year`, { year: foundedBefore });
    }
  }

  async findAllAndPaginate(query: MuseumsQueryDto) {
    const { limit = 10, page = 1 } = query;

    const qb = this.museumRepository.createQueryBuilder('museum');

    this.buildQuery(qb, query);

    qb.orderBy('museum.name', 'ASC')
      .skip((page - 1) * limit)
      .take(limit);

    const [data, total] = await qb.getManyAndCount();

    const pages = Math.max(1, Math.ceil(total / limit));

    return {
      data,
      meta: {
        total,
        page,
        limit,
        pages,
      },
    };
  }

  async findOne(id: string): Promise<MuseumEntity> {
    const museum = await this.museumRepository.findOne({
      where: { id },
      relations: ['artworks', 'exhibitions'],
    });
    if (!museum) {
      throw new BusinessLogicException(
        'The museum with the given id was not found',
        BusinessError.NOT_FOUND,
      );
    }
    return museum;
  }

  async create(museum: MuseumEntity): Promise<MuseumEntity> {
    return await this.museumRepository.save(museum);
  }

  async update(id: string, museum: MuseumEntity): Promise<MuseumEntity> {
    const persisted = await this.museumRepository.findOne({ where: { id } });
    if (!persisted) {
      throw new BusinessLogicException(
        'The museum with the given id was not found',
        BusinessError.NOT_FOUND,
      );
    }
    return await this.museumRepository.save({ ...persisted, ...museum });
  }

  async delete(id: string) {
    const museum = await this.museumRepository.findOne({ where: { id } });
    if (!museum) {
      throw new BusinessLogicException(
        'The museum with the given id was not found',
        BusinessError.NOT_FOUND,
      );
    }
    await this.museumRepository.remove(museum);
  }
}

