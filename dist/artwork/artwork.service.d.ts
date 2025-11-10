import { Repository } from 'typeorm';
import { ArtworkEntity } from './artwork.entity';
export declare class ArtworkService {
    private readonly artworkRepository;
    constructor(artworkRepository: Repository<ArtworkEntity>);
    findAll(): Promise<ArtworkEntity[]>;
    findOne(id: string): Promise<ArtworkEntity>;
    create(artwork: ArtworkEntity): Promise<ArtworkEntity>;
    update(id: string, artwork: ArtworkEntity): Promise<ArtworkEntity>;
    delete(id: string): Promise<void>;
}
