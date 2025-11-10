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
exports.ImageEntity = void 0;
const artwork_entity_1 = require("../artwork/artwork.entity");
const typeorm_1 = require("typeorm");
let ImageEntity = class ImageEntity {
    id;
    source;
    altText;
    height;
    width;
    artwork;
};
exports.ImageEntity = ImageEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], ImageEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ImageEntity.prototype, "source", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ImageEntity.prototype, "altText", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ImageEntity.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ImageEntity.prototype, "width", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => artwork_entity_1.ArtworkEntity, artwork => artwork.images),
    __metadata("design:type", artwork_entity_1.ArtworkEntity)
], ImageEntity.prototype, "artwork", void 0);
exports.ImageEntity = ImageEntity = __decorate([
    (0, typeorm_1.Entity)()
], ImageEntity);
//# sourceMappingURL=image.entity.js.map