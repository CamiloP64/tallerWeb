import { ArtworkEntity } from "../artwork/artwork.entity";
import { MovementEntity } from "../movement/movement.entity";
export declare class ArtistEntity {
    id: string;
    name: string;
    birthplace: string;
    birthdate: Date;
    image: string;
    artworks: ArtworkEntity[];
    movements: MovementEntity[];
}
