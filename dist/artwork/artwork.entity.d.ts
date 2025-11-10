import { ExhibitionEntity } from "../exhibition/exhibition.entity";
import { MuseumEntity } from "../museum/museum.entity";
import { ImageEntity } from "../image/image.entity";
import { ArtistEntity } from "../artist/artist.entity";
export declare class ArtworkEntity {
    id: string;
    name: string;
    year: number;
    description: string;
    type: string;
    mainImage: string;
    museum: MuseumEntity;
    exhibition: ExhibitionEntity;
    images: ImageEntity[];
    artist: ArtistEntity;
}
