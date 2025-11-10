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
exports.MuseumEntity = void 0;
const artwork_entity_1 = require("../artwork/artwork.entity");
const typeorm_1 = require("typeorm");
const exhibition_entity_1 = require("../exhibition/exhibition.entity");
let MuseumEntity = class MuseumEntity {
    id;
    name;
    description;
    address;
    foundedBefore;
    city;
    image;
    exhibitions;
    artworks;
};
exports.MuseumEntity = MuseumEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MuseumEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MuseumEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MuseumEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MuseumEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], MuseumEntity.prototype, "foundedBefore", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MuseumEntity.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MuseumEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => exhibition_entity_1.ExhibitionEntity, exhibition => exhibition.museum),
    __metadata("design:type", Array)
], MuseumEntity.prototype, "exhibitions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => artwork_entity_1.ArtworkEntity, artwork => artwork.museum),
    __metadata("design:type", Array)
], MuseumEntity.prototype, "artworks", void 0);
exports.MuseumEntity = MuseumEntity = __decorate([
    (0, typeorm_1.Entity)()
], MuseumEntity);
//# sourceMappingURL=museum.entity.js.map