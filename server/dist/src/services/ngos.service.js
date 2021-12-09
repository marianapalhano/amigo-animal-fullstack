"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NgosService = void 0;
const ngos_repository_1 = require("../repositories/ngos.repository");
class NgosService {
    constructor() { }
    getAll() {
        return ngos_repository_1.NgosRepository.getAll();
    }
    getById(id) {
        return ngos_repository_1.NgosRepository.getById(id);
    }
    create(ngo) {
        return ngos_repository_1.NgosRepository.create(ngo);
    }
}
exports.NgosService = NgosService;
