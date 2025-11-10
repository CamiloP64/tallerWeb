import { Repository } from 'typeorm';
import { MuseumEntity } from './museum.entity';
import { MuseumsQueryDto } from './museums-query.dto';
export declare class MuseumService {
    private readonly museumRepository;
    constructor(museumRepository: Repository<MuseumEntity>);
    private buildQuery;
    findAllAndPaginate(query: MuseumsQueryDto): Promise<{
        data: MuseumEntity[];
        meta: {
            total: number;
            page: number;
            limit: number;
            pages: number;
        };
    }>;
    findOne(id: string): Promise<MuseumEntity>;
    create(museum: MuseumEntity): Promise<MuseumEntity>;
    update(id: string, museum: MuseumEntity): Promise<MuseumEntity>;
    delete(id: string): Promise<void>;
}
