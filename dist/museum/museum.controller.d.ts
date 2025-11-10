import { MuseumDto } from './museum.dto';
import { MuseumEntity } from './museum.entity';
import { MuseumService } from './museum.service';
export declare class MuseumController {
    private readonly museumService;
    constructor(museumService: MuseumService);
    findAll(): Promise<MuseumEntity[]>;
    findOne(museumId: string): Promise<MuseumEntity>;
    create(museumDto: MuseumDto): Promise<MuseumEntity>;
    update(museumId: string, museumDto: MuseumDto): Promise<MuseumEntity>;
    delete(museumId: string): Promise<void>;
}
