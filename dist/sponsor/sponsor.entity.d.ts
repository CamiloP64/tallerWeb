import { ExhibitionEntity } from "../exhibition/exhibition.entity";
export declare class SponsorEntity {
    id: string;
    name: string;
    description: string;
    website: string;
    exhibition: ExhibitionEntity;
}
