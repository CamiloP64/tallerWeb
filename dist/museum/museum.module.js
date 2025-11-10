"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuseumModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const museum_entity_1 = require("./museum.entity");
const museum_service_1 = require("./museum.service");
const museum_controller_1 = require("./museum.controller");
let MuseumModule = class MuseumModule {
};
exports.MuseumModule = MuseumModule;
exports.MuseumModule = MuseumModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([museum_entity_1.MuseumEntity])],
        providers: [museum_service_1.MuseumService],
        controllers: [museum_controller_1.MuseumController],
    })
], MuseumModule);
//# sourceMappingURL=museum.module.js.map