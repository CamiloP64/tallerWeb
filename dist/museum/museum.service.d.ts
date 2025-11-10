import { Repository } from 'typeorm';
import { MuseumEntity } from './museum.entity';
export declare class MuseumService {
    private readonly museumRepository;
    constructor(museumRepository: Repository<MuseumEntity>);
    findAll(): Promise<MuseumEntity[]>;
    findOne(id: string): Promise<MuseumEntity>;
    create(museum: MuseumEntity): Promise<MuseumEntity>;
    update(id: string, museum: MuseumEntity): Promise<MuseumEntity>;
    delete(id: string): Promise<void>;
}
