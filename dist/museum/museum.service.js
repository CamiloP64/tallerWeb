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
exports.MuseumService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const business_errors_1 = require("../shared/errors/business-errors");
const typeorm_2 = require("typeorm");
const museum_entity_1 = require("./museum.entity");
let MuseumService = class MuseumService {
    museumRepository;
    constructor(museumRepository) {
        this.museumRepository = museumRepository;
    }
    async findAll() {
        return await this.museumRepository.find({ relations: ['artworks', 'exhibitions'] });
    }
    async findOne(id) {
        const museum = await this.museumRepository.findOne({
            where: { id },
            relations: ['artworks', 'exhibitions'],
        });
        if (!museum)
            throw new business_errors_1.BusinessLogicException('The museum with the given id was not found', business_errors_1.BusinessError.NOT_FOUND);
        return museum;
    }
    async create(museum) {
        return await this.museumRepository.save(museum);
    }
    async update(id, museum) {
        const persistedMuseum = await this.museumRepository.findOne({ where: { id } });
        if (!persistedMuseum)
            throw new business_errors_1.BusinessLogicException('The museum with the given id was not found', business_errors_1.BusinessError.NOT_FOUND);
        return await this.museumRepository.save({ ...persistedMuseum, ...museum });
    }
    async delete(id) {
        const museum = await this.museumRepository.findOne({ where: { id } });
        if (!museum)
            throw new business_errors_1.BusinessLogicException('The museum with the given id was not found', business_errors_1.BusinessError.NOT_FOUND);
        await this.museumRepository.remove(museum);
    }
};
exports.MuseumService = MuseumService;
exports.MuseumService = MuseumService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(museum_entity_1.MuseumEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MuseumService);
//# sourceMappingURL=museum.service.js.map