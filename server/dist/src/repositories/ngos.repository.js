"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NgosRepository = void 0;
const typeorm_1 = require("typeorm");
const ngos_entity_1 = require("../entities/ngos.entity");
class NgosRepository {
    static getAll() {
        return (0, typeorm_1.getConnection)()
            .getRepository(ngos_entity_1.NgoEntity)
            .find();
    }
    static getById(id) {
        return (0, typeorm_1.getConnection)()
            .getRepository(ngos_entity_1.NgoEntity)
            .findOne({ id });
    }
    static create(ngo) {
        return (0, typeorm_1.getConnection)()
            .getRepository(ngos_entity_1.NgoEntity)
            .insert(ngo);
    }
    static update(id, ngo) {
        return (0, typeorm_1.getConnection)()
            .getRepository(ngos_entity_1.NgoEntity)
            .update({ id }, ngo);
    }
    static remove(id) {
        return (0, typeorm_1.getConnection)()
            .getRepository(ngos_entity_1.NgoEntity)
            .delete({ id });
    }
}
exports.NgosRepository = NgosRepository;
