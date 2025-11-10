"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmTestingConfig = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const artist_entity_1 = require("../../artist/artist.entity");
const artwork_entity_1 = require("../../artwork/artwork.entity");
const exhibition_entity_1 = require("../../exhibition/exhibition.entity");
const image_entity_1 = require("../../image/image.entity");
const movement_entity_1 = require("../../movement/movement.entity");
const museum_entity_1 = require("../../museum/museum.entity");
const sponsor_entity_1 = require("../../sponsor/sponsor.entity");
const TypeOrmTestingConfig = () => [
    typeorm_1.TypeOrmModule.forRoot({
        type: 'sqlite',
        database: ':memory:',
        dropSchema: true,
        entities: [artist_entity_1.ArtistEntity, artwork_entity_1.ArtworkEntity, exhibition_entity_1.ExhibitionEntity, image_entity_1.ImageEntity, movement_entity_1.MovementEntity, museum_entity_1.MuseumEntity, sponsor_entity_1.SponsorEntity],
        synchronize: true,
    }),
    typeorm_1.TypeOrmModule.forFeature([artist_entity_1.ArtistEntity, artwork_entity_1.ArtworkEntity, exhibition_entity_1.ExhibitionEntity, image_entity_1.ImageEntity, movement_entity_1.MovementEntity, museum_entity_1.MuseumEntity, sponsor_entity_1.SponsorEntity]),
];
exports.TypeOrmTestingConfig = TypeOrmTestingConfig;
//# sourceMappingURL=typeorm-testing-config.js.map