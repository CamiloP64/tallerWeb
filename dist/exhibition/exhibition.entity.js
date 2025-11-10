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
exports.ExhibitionEntity = void 0;
const artwork_entity_1 = require("../artwork/artwork.entity");
const museum_entity_1 = require("../museum/museum.entity");
const typeorm_1 = require("typeorm");
const sponsor_entity_1 = require("../sponsor/sponsor.entity");
let ExhibitionEntity = class ExhibitionEntity {
    id;
    name;
    description;
    museum;
    artworks;
    sponsor;
};
exports.ExhibitionEntity = ExhibitionEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], ExhibitionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExhibitionEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExhibitionEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => museum_entity_1.MuseumEntity, museum => museum.exhibitions),
    __metadata("design:type", museum_entity_1.MuseumEntity)
], ExhibitionEntity.prototype, "museum", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => artwork_entity_1.ArtworkEntity, artwork => artwork.exhibition),
    __metadata("design:type", Array)
], ExhibitionEntity.prototype, "artworks", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => sponsor_entity_1.SponsorEntity, sponsor => sponsor.exhibition),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", sponsor_entity_1.SponsorEntity)
], ExhibitionEntity.prototype, "sponsor", void 0);
exports.ExhibitionEntity = ExhibitionEntity = __decorate([
    (0, typeorm_1.Entity)()
], ExhibitionEntity);
//# sourceMappingURL=exhibition.entity.js.map