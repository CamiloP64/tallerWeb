"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const museum_module_1 = require("./museum/museum.module");
const exhibition_module_1 = require("./exhibition/exhibition.module");
const artwork_module_1 = require("./artwork/artwork.module");
const sponsor_module_1 = require("./sponsor/sponsor.module");
const artist_module_1 = require("./artist/artist.module");
const movement_module_1 = require("./movement/movement.module");
const image_module_1 = require("./image/image.module");
const typeorm_1 = require("@nestjs/typeorm");
const artist_entity_1 = require("./artist/artist.entity");
const artwork_entity_1 = require("./artwork/artwork.entity");
const exhibition_entity_1 = require("./exhibition/exhibition.entity");
const image_entity_1 = require("./image/image.entity");
const movement_entity_1 = require("./movement/movement.entity");
const museum_entity_1 = require("./museum/museum.entity");
const sponsor_entity_1 = require("./sponsor/sponsor.entity");
const museum_artwork_module_1 = require("./museum-artwork/museum-artwork.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [museum_module_1.MuseumModule, exhibition_module_1.ExhibitionModule, artwork_module_1.ArtworkModule, sponsor_module_1.SponsorModule, image_module_1.ImageModule, artist_module_1.ArtistModule, movement_module_1.MovementModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '1234',
                database: 'museum',
                entities: [artist_entity_1.ArtistEntity, artwork_entity_1.ArtworkEntity, exhibition_entity_1.ExhibitionEntity, image_entity_1.ImageEntity, movement_entity_1.MovementEntity, museum_entity_1.MuseumEntity, sponsor_entity_1.SponsorEntity],
                dropSchema: true,
                synchronize: true,
            }),
            museum_artwork_module_1.MuseumArtworkModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map