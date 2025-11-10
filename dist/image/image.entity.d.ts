import { ArtworkEntity } from "../artwork/artwork.entity";
export declare class ImageEntity {
    id: string;
    source: string;
    altText: string;
    height: number;
    width: number;
    artwork: ArtworkEntity;
}
