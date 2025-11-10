import { Repository } from 'typeorm';
import { ArtworkEntity } from '../artwork/artwork.entity';
import { MuseumEntity } from '../museum/museum.entity';
export declare class MuseumArtworkService {
    private readonly museumRepository;
    private readonly artworkRepository;
    constructor(museumRepository: Repository<MuseumEntity>, artworkRepository: Repository<ArtworkEntity>);
    addArtworkMuseum(museumId: string, artworkId: string): Promise<MuseumEntity>;
    findArtworkByMuseumIdArtworkId(museumId: string, artworkId: string): Promise<ArtworkEntity>;
    findArtworksByMuseumId(museumId: string): Promise<ArtworkEntity[]>;
    associateArtworksMuseum(museumId: string, artworks: ArtworkEntity[]): Promise<MuseumEntity>;
    deleteArtworkMuseum(museumId: string, artworkId: string): Promise<void>;
}
