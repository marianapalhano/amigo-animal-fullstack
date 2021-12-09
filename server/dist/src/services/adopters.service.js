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
exports.AdoptersService = void 0;
const adopters_repository_1 = require("../repositories/adopters.repository");
class AdoptersService {
    constructor() { }
    getAll() {
        return adopters_repository_1.AdoptersRepository.getAll();
    }
    getById(id) {
        return adopters_repository_1.AdoptersRepository.getById(id);
    }
    getByEmailAndPassword(email, password) {
        return adopters_repository_1.AdoptersRepository.findByEmailAndPassword(email, password);
    }
    create(adopter) {
        return adopters_repository_1.AdoptersRepository.create(adopter);
    }
    update(name, email, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const adopter = yield adopters_repository_1.AdoptersRepository.getById(parseInt(id));
            if (adopter) {
                yield adopters_repository_1.AdoptersRepository.update(parseInt(id), { name, email });
                return true;
            }
            else {
                return false;
            }
        });
    }
    makeAdoption(pets, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const adopter = yield adopters_repository_1.AdoptersRepository.getById(parseInt(id));
            if (adopter) {
                yield adopters_repository_1.AdoptersRepository.makeAdoption(parseInt(id), { pets });
                return true;
            }
            else {
                return false;
            }
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const adopter = yield adopters_repository_1.AdoptersRepository.getById(parseInt(id));
            if (adopter) {
                yield adopters_repository_1.AdoptersRepository.remove(parseInt(id));
                return true;
            }
            else {
                return false;
            }
        });
    }
}
exports.AdoptersService = AdoptersService;
