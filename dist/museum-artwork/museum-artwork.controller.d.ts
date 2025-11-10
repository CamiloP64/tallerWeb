import { ArtworkEntity } from 'src/artwork/artwork.entity';
import { ArtworkDto } from '../artwork/artwork.dto';
import { MuseumArtworkService } from './museum-artwork.service';
export declare class MuseumArtworkController {
    private readonly museumArtworkService;
    constructor(museumArtworkService: MuseumArtworkService);
    addArtworkMuseum(museumId: string, artworkId: string): Promise<import("../museum/museum.entity").MuseumEntity>;
    findArtworkByMuseumIdArtworkId(museumId: string, artworkId: string): Promise<ArtworkEntity>;
    findArtworksByMuseumId(museumId: string): Promise<ArtworkEntity[]>;
    associateArtworksMuseum(artworksDto: ArtworkDto[], museumId: string): Promise<import("../museum/museum.entity").MuseumEntity>;
    deleteArtworkMuseum(museumId: string, artworkId: string): Promise<void>;
}
