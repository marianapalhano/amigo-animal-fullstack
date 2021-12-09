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
const express_1 = require("express");
const pets_service_1 = require("../services/pets.service");
const router = (0, express_1.Router)();
const petsService = new pets_service_1.PetsService();
// GET -------------------------------------------------------------------------------------
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pets = yield petsService.getAll();
    res.status(200).send(pets);
}));
router.get('/id/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pet = yield petsService.getById(parseInt(req.params.id));
    if (pet) {
        res.status(200).send(pet);
    }
    else {
        res.status(404).send({ message: 'Pet não encontrado' });
    }
}));
router.get('/foradoption', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pets = yield petsService.getByAdoption();
    res.status(200).send(pets);
}));
// POST  ------------------------------------------------------------------------------------
router.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pet = req.body;
    const createdPet = yield petsService.create(pet);
    res.status(201).send(createdPet);
}));
// PUT -------------------------------------------------------------------------------------
router.put('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const partialPet = req.body;
    const updateResult = yield petsService.update(partialPet.isAdopted, req.params.id);
    if (updateResult) {
        res.status(200).send(updateResult);
    }
    else {
        res.status(404).send({ message: 'Pet não encontrado' });
    }
}));
exports.default = router;
