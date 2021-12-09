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
const ngos_service_1 = require("../services/ngos.service");
const router = (0, express_1.Router)();
const ngosService = new ngos_service_1.NgosService();
// GET -------------------------------------------------------------------------------------
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ngos = yield ngosService.getAll();
    res.status(200).send(ngos);
}));
router.get('/id/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ngo = yield ngosService.getById(parseInt(req.params.id));
    if (ngo) {
        res.status(200).send(ngo);
    }
    else {
        res.status(404).send({ message: 'ONG não encontrada' });
    }
}));
// POST  ------------------------------------------------------------------------------------
router.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ngo = req.body;
    const createdNgo = yield ngosService.create(ngo);
    res.status(201).send(createdNgo);
}));
exports.default = router;
