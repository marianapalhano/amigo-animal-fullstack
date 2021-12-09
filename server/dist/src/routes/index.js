"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pets_routes_1 = __importDefault(require("./pets.routes"));
const ngos_routes_1 = __importDefault(require("./ngos.routes"));
const adopters_routes_1 = __importDefault(require("./adopters.routes"));
const router = (0, express_1.Router)();
router.use('/pets', pets_routes_1.default);
router.use('/ngos', ngos_routes_1.default);
router.use('/adopters', adopters_routes_1.default);
exports.default = router;
