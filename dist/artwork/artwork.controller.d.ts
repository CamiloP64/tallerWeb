import { ArtworkDto } from './artwork.dto';
import { ArtworkEntity } from './artwork.entity';
import { ArtworkService } from './artwork.service';
export declare class ArtworkController {
    private readonly artworkService;
    constructor(artworkService: ArtworkService);
    findAll(): Promise<ArtworkEntity[]>;
    findOne(artworkId: string): Promise<ArtworkEntity>;
    create(artworkDto: ArtworkDto): Promise<ArtworkEntity>;
    update(artworkId: string, artworkDto: ArtworkDto): Promise<ArtworkEntity>;
    delete(artworkId: string): Promise<void>;
}
