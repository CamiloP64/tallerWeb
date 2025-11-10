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
exports.MuseumArtworkService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const artwork_entity_1 = require("../artwork/artwork.entity");
const museum_entity_1 = require("../museum/museum.entity");
const business_errors_1 = require("../shared/errors/business-errors");
let MuseumArtworkService = class MuseumArtworkService {
    museumRepository;
    artworkRepository;
    constructor(museumRepository, artworkRepository) {
        this.museumRepository = museumRepository;
        this.artworkRepository = artworkRepository;
    }
    async addArtworkMuseum(museumId, artworkId) {
        const artwork = await this.artworkRepository.findOne({ where: { id: artworkId } });
        if (!artwork)
            throw new business_errors_1.BusinessLogicException('The artwork with the given id was not found', business_errors_1.BusinessError.NOT_FOUND);
        const museum = await this.museumRepository.findOne({
            where: { id: museumId },
            relations: ['artworks', 'exhibitions'],
        });
        if (!museum)
            throw new business_errors_1.BusinessLogicException('The museum with the given id was not found', business_errors_1.BusinessError.NOT_FOUND);
        museum.artworks = [...museum.artworks, artwork];
        return await this.museumRepository.save(museum);
    }
    async findArtworkByMuseumIdArtworkId(museumId, artworkId) {
        const artwork = await this.artworkRepository.findOne({ where: { id: artworkId } });
        if (!artwork)
            throw new business_errors_1.BusinessLogicException('The artwork with the given id was not found', business_errors_1.BusinessError.NOT_FOUND);
        const museum = await this.museumRepository.findOne({
            where: { id: museumId },
            relations: ['artworks'],
        });
        if (!museum)
            throw new business_errors_1.BusinessLogicException('The museum with the given id was not found', business_errors_1.BusinessError.NOT_FOUND);
        const museumArtwork = museum.artworks.find((e) => e.id === artwork.id);
        if (!museumArtwork)
            throw new business_errors_1.BusinessLogicException('The artwork with the given id is not associated to the museum', business_errors_1.BusinessError.PRECONDITION_FAILED);
        return museumArtwork;
    }
    async findArtworksByMuseumId(museumId) {
        const museum = await this.museumRepository.findOne({
            where: { id: museumId },
            relations: ['artworks'],
        });
        if (!museum)
            throw new business_errors_1.BusinessLogicException('The museum with the given id was not found', business_errors_1.BusinessError.NOT_FOUND);
        return museum.artworks;
    }
    async associateArtworksMuseum(museumId, artworks) {
        const museum = await this.museumRepository.findOne({
            where: { id: museumId },
            relations: ['artworks'],
        });
        if (!museum)
            throw new business_errors_1.BusinessLogicException('The museum with the given id was not found', business_errors_1.BusinessError.NOT_FOUND);
        for (let i = 0; i < artworks.length; i++) {
            const a = await this.artworkRepository.findOne({ where: { id: artworks[i].id } });
            if (!a)
                throw new business_errors_1.BusinessLogicException('The artwork with the given id was not found', business_errors_1.BusinessError.NOT_FOUND);
        }
        museum.artworks = artworks;
        return await this.museumRepository.save(museum);
    }
    async deleteArtworkMuseum(museumId, artworkId) {
        const artwork = await this.artworkRepository.findOne({ where: { id: artworkId } });
        if (!artwork)
            throw new business_errors_1.BusinessLogicException('The artwork with the given id was not found', business_errors_1.BusinessError.NOT_FOUND);
        const museum = await this.museumRepository.findOne({
            where: { id: museumId },
            relations: ['artworks'],
        });
        if (!museum)
            throw new business_errors_1.BusinessLogicException('The museum with the given id was not found', business_errors_1.BusinessError.NOT_FOUND);
        const museumArtwork = museum.artworks.find((e) => e.id === artwork.id);
        if (!museumArtwork)
            throw new business_errors_1.BusinessLogicException('The artwork with the given id is not associated to the museum', business_errors_1.BusinessError.PRECONDITION_FAILED);
        museum.artworks = museum.artworks.filter((e) => e.id !== artworkId);
        await this.museumRepository.save(museum);
    }
};
exports.MuseumArtworkService = MuseumArtworkService;
exports.MuseumArtworkService = MuseumArtworkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(museum_entity_1.MuseumEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(artwork_entity_1.ArtworkEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], MuseumArtworkService);
//# sourceMappingURL=museum-artwork.service.js.map