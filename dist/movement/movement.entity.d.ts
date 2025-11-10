import { ArtistEntity } from "../artist/artist.entity";
export declare class MovementEntity {
    id: string;
    name: string;
    description: string;
    countryOfOrigin: string;
    artists: ArtistEntity[];
}
