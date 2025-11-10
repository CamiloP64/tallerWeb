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
exports.MuseumArtworkController = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const artwork_entity_1 = require("../artwork/artwork.entity");
const business_errors_interceptor_1 = require("../shared/interceptors/business-errors.interceptor");
const museum_artwork_service_1 = require("./museum-artwork.service");
let MuseumArtworkController = class MuseumArtworkController {
    museumArtworkService;
    constructor(museumArtworkService) {
        this.museumArtworkService = museumArtworkService;
    }
    async addArtworkMuseum(museumId, artworkId) {
        return await this.museumArtworkService.addArtworkMuseum(museumId, artworkId);
    }
    async findArtworkByMuseumIdArtworkId(museumId, artworkId) {
        return await this.museumArtworkService.findArtworkByMuseumIdArtworkId(museumId, artworkId);
    }
    async findArtworksByMuseumId(museumId) {
        return await this.museumArtworkService.findArtworksByMuseumId(museumId);
    }
    async associateArtworksMuseum(artworksDto, museumId) {
        const artworks = (0, class_transformer_1.plainToInstance)(artwork_entity_1.ArtworkEntity, artworksDto);
        return await this.museumArtworkService.associateArtworksMuseum(museumId, artworks);
    }
    async deleteArtworkMuseum(museumId, artworkId) {
        return await this.museumArtworkService.deleteArtworkMuseum(museumId, artworkId);
    }
};
exports.MuseumArtworkController = MuseumArtworkController;
__decorate([
    (0, common_1.Post)(':museumId/artworks/:artworkId'),
    __param(0, (0, common_1.Param)('museumId')),
    __param(1, (0, common_1.Param)('artworkId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MuseumArtworkController.prototype, "addArtworkMuseum", null);
__decorate([
    (0, common_1.Get)(':museumId/artworks/:artworkId'),
    __param(0, (0, common_1.Param)('museumId')),
    __param(1, (0, common_1.Param)('artworkId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MuseumArtworkController.prototype, "findArtworkByMuseumIdArtworkId", null);
__decorate([
    (0, common_1.Get)(':museumId/artworks'),
    __param(0, (0, common_1.Param)('museumId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MuseumArtworkController.prototype, "findArtworksByMuseumId", null);
__decorate([
    (0, common_1.Put)(':museumId/artworks'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('museumId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String]),
    __metadata("design:returntype", Promise)
], MuseumArtworkController.prototype, "associateArtworksMuseum", null);
__decorate([
    (0, common_1.Delete)(':museumId/artworks/:artworkId'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('museumId')),
    __param(1, (0, common_1.Param)('artworkId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MuseumArtworkController.prototype, "deleteArtworkMuseum", null);
exports.MuseumArtworkController = MuseumArtworkController = __decorate([
    (0, common_1.Controller)('museums'),
    (0, common_1.UseInterceptors)(business_errors_interceptor_1.BusinessErrorsInterceptor),
    __metadata("design:paramtypes", [museum_artwork_service_1.MuseumArtworkService])
], MuseumArtworkController);
//# sourceMappingURL=museum-artwork.controller.js.map