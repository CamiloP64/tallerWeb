"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkEntity = void 0;
const exhibition_entity_1 = require("../exhibition/exhibition.entity");
const museum_entity_1 = require("../museum/museum.entity");
const typeorm_1 = require("typeorm");
const image_entity_1 = require("../image/image.entity");
const artist_entity_1 = require("../artist/artist.entity");
let ArtworkEntity = class ArtworkEntity {
    id;
    name;
    year;
    description;
    type;
    mainImage;
    museum;
    exhibition;
    images;
    artist;
};
exports.ArtworkEntity = ArtworkEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], ArtworkEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ArtworkEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ArtworkEntity.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ArtworkEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ArtworkEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ArtworkEntity.prototype, "mainImage", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => museum_entity_1.MuseumEntity, museum => museum.artworks),
    __metadata("design:type", museum_entity_1.MuseumEntity)
], ArtworkEntity.prototype, "museum", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => exhibition_entity_1.ExhibitionEntity, exhibition => exhibition.artworks),
    __metadata("design:type", exhibition_entity_1.ExhibitionEntity)
], ArtworkEntity.prototype, "exhibition", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => image_entity_1.ImageEntity, image => image.artwork),
    __metadata("design:type", Array)
], ArtworkEntity.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => artist_entity_1.ArtistEntity, artist => artist.artworks),
    __metadata("design:type", artist_entity_1.ArtistEntity)
], ArtworkEntity.prototype, "artist", void 0);
exports.ArtworkEntity = ArtworkEntity = __decorate([
    (0, typeorm_1.Entity)()
], ArtworkEntity);
//# sourceMappingURL=artwork.entity.js.map