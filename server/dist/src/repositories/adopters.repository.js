"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdoptersRepository = void 0;
const typeorm_1 = require("typeorm");
const adopters_entity_1 = require("../entities/adopters.entity");
class AdoptersRepository {
    static getAll() {
        return (0, typeorm_1.getConnection)()
            .getRepository(adopters_entity_1.AdopterEntity)
            .find();
    }
    static getById(id) {
        return (0, typeorm_1.getConnection)()
            .getRepository(adopters_entity_1.AdopterEntity)
            .findOne({ id });
    }
    static findByEmailAndPassword(email, password) {
        return (0, typeorm_1.getConnection)()
            .getRepository(adopters_entity_1.AdopterEntity)
            .findOne({ email, password });
    }
    static create(adopter) {
        return (0, typeorm_1.getConnection)()
            .getRepository(adopters_entity_1.AdopterEntity)
            .insert(adopter);
    }
    static update(id, adopter) {
        return (0, typeorm_1.getConnection)()
            .getRepository(adopters_entity_1.AdopterEntity)
            .update({ id }, adopter);
    }
    static makeAdoption(id, adopter) {
        return (0, typeorm_1.getConnection)()
            .getRepository(adopters_entity_1.AdopterEntity)
            .update({ id }, adopter);
    }
    static remove(id) {
        return (0, typeorm_1.getConnection)()
            .getRepository(adopters_entity_1.AdopterEntity)
            .delete({ id });
    }
}
exports.AdoptersRepository = AdoptersRepository;
