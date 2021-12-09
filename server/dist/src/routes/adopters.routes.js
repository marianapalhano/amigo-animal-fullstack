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
const adopters_service_1 = require("../services/adopters.service");
const router = (0, express_1.Router)();
const adoptersService = new adopters_service_1.AdoptersService();
// GET -------------------------------------------------------------------------------------
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const adopters = yield adoptersService.getAll();
    res.status(200).send(adopters);
}));
router.get('/id/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const adopter = yield adoptersService.getById(parseInt(req.params.id));
    if (adopter) {
        res.status(200).send(adopter);
    }
    else {
        res.status(404).send({ message: 'Adotante não encontrado' });
    }
}));
// POST  ------------------------------------------------------------------------------------
router.post('/authenticate', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const adopter = yield adoptersService.getByEmailAndPassword(req.body.email, req.body.password);
    if (adopter) {
        res.status(200).send(adopter);
    }
    else {
        res.status(404).send({ message: 'Usuário/senha inválidos!' });
    }
}));
router.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const adopter = req.body;
    const createdAdopter = yield adoptersService.create(adopter);
    res.status(201).send(createdAdopter);
}));
// PUT -------------------------------------------------------------------------------------
router.put('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const partialAdopter = req.body;
    const updateResult = yield adoptersService.update(partialAdopter.name, partialAdopter.email, req.params.id);
    if (updateResult) {
        res.status(200).send(updateResult);
    }
    else {
        res.status(404).send({ message: 'Adotante não encontrado' });
    }
}));
router.put('/adoption/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const partialAdopter = req.body;
    const updateResult = yield adoptersService.makeAdoption(partialAdopter.pets, req.params.id);
    if (updateResult) {
        res.status(200).send(updateResult);
    }
    else {
        res.status(404).send({ message: 'Adotante não encontrado' });
    }
}));
// DELETE -----------------------------------------------------------------------------------
router.delete('/remove/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const deleteResult = yield adoptersService.remove(id);
    if (deleteResult)
        res.status(200).send({ message: 'Adotante excluído com sucesso' });
    else
        res.status(404).send({ message: 'Adotante não encontrado, não foi possível fazer a exclusão' });
}));
exports.default = router;
