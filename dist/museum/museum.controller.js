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
exports.MuseumController = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const business_errors_interceptor_1 = require("../shared/interceptors/business-errors.interceptor");
const museum_dto_1 = require("./museum.dto");
const museum_entity_1 = require("./museum.entity");
const museum_service_1 = require("./museum.service");
let MuseumController = class MuseumController {
    museumService;
    constructor(museumService) {
        this.museumService = museumService;
    }
    async findAll() {
        return await this.museumService.findAll();
    }
    async findOne(museumId) {
        return await this.museumService.findOne(museumId);
    }
    async create(museumDto) {
        const museum = (0, class_transformer_1.plainToInstance)(museum_entity_1.MuseumEntity, museumDto);
        return await this.museumService.create(museum);
    }
    async update(museumId, museumDto) {
        const museum = (0, class_transformer_1.plainToInstance)(museum_entity_1.MuseumEntity, museumDto);
        return await this.museumService.update(museumId, museum);
    }
    async delete(museumId) {
        return await this.museumService.delete(museumId);
    }
};
exports.MuseumController = MuseumController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MuseumController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':museumId'),
    __param(0, (0, common_1.Param)('museumId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MuseumController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [museum_dto_1.MuseumDto]),
    __metadata("design:returntype", Promise)
], MuseumController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':museumId'),
    __param(0, (0, common_1.Param)('museumId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, museum_dto_1.MuseumDto]),
    __metadata("design:returntype", Promise)
], MuseumController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':museumId'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('museumId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MuseumController.prototype, "delete", null);
exports.MuseumController = MuseumController = __decorate([
    (0, common_1.Controller)('museums'),
    (0, common_1.UseInterceptors)(business_errors_interceptor_1.BusinessErrorsInterceptor),
    __metadata("design:paramtypes", [museum_service_1.MuseumService])
], MuseumController);
//# sourceMappingURL=museum.controller.js.map