import { ArtworkEntity } from "../artwork/artwork.entity";
import { MuseumEntity } from "../museum/museum.entity";
import { SponsorEntity } from "../sponsor/sponsor.entity";
export declare class ExhibitionEntity {
    id: string;
    name: string;
    description: string;
    museum: MuseumEntity;
    artworks: ArtworkEntity[];
    sponsor: SponsorEntity;
}
