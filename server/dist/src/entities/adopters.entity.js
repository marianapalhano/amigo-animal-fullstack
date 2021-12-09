"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdopterEntity = void 0;
const typeorm_1 = require("typeorm");
let AdopterEntity = class AdopterEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' })
], AdopterEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cpf', type: 'bigint' })
], AdopterEntity.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', type: 'varchar', length: 100 })
], AdopterEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'birthdate', type: 'date' })
], AdopterEntity.prototype, "birthdate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email', type: 'varchar', length: 50 })
], AdopterEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'password', type: 'varchar', length: 10 })
], AdopterEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'phone', type: 'bigint' })
], AdopterEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'address', type: 'varchar', length: 255 })
], AdopterEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'complement', type: 'varchar', length: 100 })
], AdopterEntity.prototype, "complement", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'neighborhood', type: 'varchar', length: 50 })
], AdopterEntity.prototype, "neighborhood", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'city', type: 'varchar', length: 25 })
], AdopterEntity.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'state', type: 'varchar', length: 2 })
], AdopterEntity.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'pets', type: 'smallint', array: true })
], AdopterEntity.prototype, "pets", void 0);
AdopterEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'adopters' })
], AdopterEntity);
exports.AdopterEntity = AdopterEntity;
