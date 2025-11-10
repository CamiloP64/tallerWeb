import { MuseumService } from './museum.service';
import { MuseumEntity } from './museum.entity';
import { MuseumsQueryDto } from './museums-query.dto';
export declare class MuseumController {
    private readonly museumService;
    constructor(museumService: MuseumService);
    findAll(query: MuseumsQueryDto): Promise<{
        data: MuseumEntity[];
        meta: {
            total: number;
            page: number;
            limit: number;
            pages: number;
        };
    }>;
    findOne(museumId: string): Promise<MuseumEntity>;
    create(dto: Partial<MuseumEntity>): Promise<MuseumEntity>;
    update(museumId: string, dto: Partial<MuseumEntity>): Promise<MuseumEntity>;
    delete(museumId: string): Promise<void>;
}
