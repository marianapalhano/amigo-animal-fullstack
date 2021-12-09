"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetEntity = void 0;
const typeorm_1 = require("typeorm");
let PetEntity = class PetEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' })
], PetEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'img_url', type: 'varchar', length: 50 })
], PetEntity.prototype, "imgUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', type: 'varchar', length: 25 })
], PetEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'gender', type: 'varchar', length: 10 })
], PetEntity.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'age', type: 'varchar', length: 25 })
], PetEntity.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'microchip', type: 'bigint' })
], PetEntity.prototype, "microchip", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'species', type: 'varchar', length: 10 })
], PetEntity.prototype, "species", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'breed', type: 'varchar', length: 25 })
], PetEntity.prototype, "breed", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'size', type: 'varchar', length: 10 })
], PetEntity.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'city', type: 'varchar', length: 25 })
], PetEntity.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'state', type: 'varchar', length: 2 })
], PetEntity.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ngo_id', type: 'smallint' })
], PetEntity.prototype, "ngoId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'personality', type: 'text' })
], PetEntity.prototype, "personality", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'inclusion_date', type: 'date' })
], PetEntity.prototype, "inclusionDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'adoption_fee', type: 'smallint' })
], PetEntity.prototype, "adoptionFee", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_adopted', type: 'boolean' })
], PetEntity.prototype, "isAdopted", void 0);
PetEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'pets' })
], PetEntity);
exports.PetEntity = PetEntity;
