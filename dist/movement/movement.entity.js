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
exports.MovementEntity = void 0;
const artist_entity_1 = require("../artist/artist.entity");
const typeorm_1 = require("typeorm");
let MovementEntity = class MovementEntity {
    id;
    name;
    description;
    countryOfOrigin;
    artists;
};
exports.MovementEntity = MovementEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], MovementEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MovementEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MovementEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MovementEntity.prototype, "countryOfOrigin", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => artist_entity_1.ArtistEntity, artist => artist.movements),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], MovementEntity.prototype, "artists", void 0);
exports.MovementEntity = MovementEntity = __decorate([
    (0, typeorm_1.Entity)()
], MovementEntity);
//# sourceMappingURL=movement.entity.js.map