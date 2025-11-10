import { ArtworkEntity } from '../artwork/artwork.entity';
import { ExhibitionEntity } from '../exhibition/exhibition.entity';
export declare class MuseumEntity {
    id: string;
    name: string;
    description: string;
    address: string;
    foundedBefore: number;
    city: string;
    image: string;
    exhibitions: ExhibitionEntity[];
    artworks: ArtworkEntity[];
}
