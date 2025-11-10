"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuseumArtworkModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const artwork_entity_1 = require("../artwork/artwork.entity");
const museum_entity_1 = require("../museum/museum.entity");
const museum_artwork_service_1 = require("./museum-artwork.service");
const museum_artwork_controller_1 = require("./museum-artwork.controller");
let MuseumArtworkModule = class MuseumArtworkModule {
};
exports.MuseumArtworkModule = MuseumArtworkModule;
exports.MuseumArtworkModule = MuseumArtworkModule = __decorate([
    (0, common_1.Module)({
        providers: [museum_artwork_service_1.MuseumArtworkService],
        imports: [typeorm_1.TypeOrmModule.forFeature([museum_entity_1.MuseumEntity, artwork_entity_1.ArtworkEntity])],
        controllers: [museum_artwork_controller_1.MuseumArtworkController],
    })
], MuseumArtworkModule);
//# sourceMappingURL=museum-artwork.module.js.map