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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkController = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const business_errors_interceptor_1 = require("../shared/interceptors/business-errors.interceptor");
const artwork_dto_1 = require("./artwork.dto");
const artwork_entity_1 = require("./artwork.entity");
const artwork_service_1 = require("./artwork.service");
let ArtworkController = class ArtworkController {
    artworkService;
    constructor(artworkService) {
        this.artworkService = artworkService;
    }
    async findAll() {
        return await this.artworkService.findAll();
    }
    async findOne(artworkId) {
        return await this.artworkService.findOne(artworkId);
    }
    async create(artworkDto) {
        const artwork = (0, class_transformer_1.plainToInstance)(artwork_entity_1.ArtworkEntity, artworkDto);
        return await this.artworkService.create(artwork);
    }
    async update(artworkId, artworkDto) {
        const artwork = (0, class_transformer_1.plainToInstance)(artwork_entity_1.ArtworkEntity, artworkDto);
        return await this.artworkService.update(artworkId, artwork);
    }
    async delete(artworkId) {
        return await this.artworkService.delete(artworkId);
    }
};
exports.ArtworkController = ArtworkController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArtworkController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':artworkId'),
    __param(0, (0, common_1.Param)('artworkId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArtworkController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [artwork_dto_1.ArtworkDto]),
    __metadata("design:returntype", Promise)
], ArtworkController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':artworkId'),
    __param(0, (0, common_1.Param)('artworkId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, artwork_dto_1.ArtworkDto]),
    __metadata("design:returntype", Promise)
], ArtworkController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':artworkId'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('artworkId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArtworkController.prototype, "delete", null);
exports.ArtworkController = ArtworkController = __decorate([
    (0, common_1.Controller)('artworks'),
    (0, common_1.UseInterceptors)(business_errors_interceptor_1.BusinessErrorsInterceptor),
    __metadata("design:paramtypes", [artwork_service_1.ArtworkService])
], ArtworkController);
//# sourceMappingURL=artwork.controller.js.map