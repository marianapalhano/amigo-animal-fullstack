"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NgoEntity = void 0;
const typeorm_1 = require("typeorm");
let NgoEntity = class NgoEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' })
], NgoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'img_url', type: 'varchar', length: 50 })
], NgoEntity.prototype, "imgUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', type: 'varchar', length: 100 })
], NgoEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'city', type: 'varchar', length: 25 })
], NgoEntity.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'state', type: 'varchar', length: 2 })
], NgoEntity.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description', type: 'text' })
], NgoEntity.prototype, "description", void 0);
NgoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'ngos' })
], NgoEntity);
exports.NgoEntity = NgoEntity;
