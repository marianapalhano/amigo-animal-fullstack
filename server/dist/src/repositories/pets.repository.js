"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsRepository = void 0;
const typeorm_1 = require("typeorm");
const pets_entity_1 = require("../entities/pets.entity");
class PetsRepository {
    static getAll() {
        return (0, typeorm_1.getConnection)()
            .getRepository(pets_entity_1.PetEntity)
            .find();
    }
    static getByAdoption() {
        return (0, typeorm_1.getConnection)()
            .getRepository(pets_entity_1.PetEntity)
            .find({ where: { isAdopted: false } });
    }
    static getById(id) {
        return (0, typeorm_1.getConnection)()
            .getRepository(pets_entity_1.PetEntity)
            .findOne({ id });
    }
    static create(pet) {
        return (0, typeorm_1.getConnection)()
            .getRepository(pets_entity_1.PetEntity)
            .insert(pet);
    }
    static update(id, pet) {
        return (0, typeorm_1.getConnection)()
            .getRepository(pets_entity_1.PetEntity)
            .update({ id }, pet);
    }
    static remove(id) {
        return (0, typeorm_1.getConnection)()
            .getRepository(pets_entity_1.PetEntity)
            .delete({ id });
    }
}
exports.PetsRepository = PetsRepository;
