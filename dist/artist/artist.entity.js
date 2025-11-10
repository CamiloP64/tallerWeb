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
exports.ArtistEntity = void 0;
const artwork_entity_1 = require("../artwork/artwork.entity");
const movement_entity_1 = require("../movement/movement.entity");
const typeorm_1 = require("typeorm");
let ArtistEntity = class ArtistEntity {
    id;
    name;
    birthplace;
    birthdate;
    image;
    artworks;
    movements;
};
exports.ArtistEntity = ArtistEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], ArtistEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ArtistEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ArtistEntity.prototype, "birthplace", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], ArtistEntity.prototype, "birthdate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ArtistEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => artwork_entity_1.ArtworkEntity, artwork => artwork.artist),
    __metadata("design:type", Array)
], ArtistEntity.prototype, "artworks", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => movement_entity_1.MovementEntity, movement => movement.artists),
    __metadata("design:type", Array)
], ArtistEntity.prototype, "movements", void 0);
exports.ArtistEntity = ArtistEntity = __decorate([
    (0, typeorm_1.Entity)()
], ArtistEntity);
//# sourceMappingURL=artist.entity.js.map