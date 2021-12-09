"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsService = void 0;
const pets_repository_1 = require("../repositories/pets.repository");
class PetsService {
    constructor() { }
    getAll() {
        return pets_repository_1.PetsRepository.getAll();
    }
    getById(id) {
        return pets_repository_1.PetsRepository.getById(id);
    }
    getByAdoption() {
        return pets_repository_1.PetsRepository.getByAdoption();
    }
    create(pet) {
        return pets_repository_1.PetsRepository.create(pet);
    }
    update(isAdopted, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const adopter = yield pets_repository_1.PetsRepository.getById(parseInt(id));
            if (adopter) {
                yield pets_repository_1.PetsRepository.update(parseInt(id), { isAdopted });
                return true;
            }
            else {
                return false;
            }
        });
    }
}
exports.PetsService = PetsService;
