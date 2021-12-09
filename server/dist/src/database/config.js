"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const typeorm_1 = require("typeorm");
const adopters_entity_1 = require("../entities/adopters.entity");
const ngos_entity_1 = require("../entities/ngos.entity");
const pets_entity_1 = require("../entities/pets.entity");
exports.connection = (0, typeorm_1.createConnection)({
    type: "postgres",
    host: "ec2-52-201-72-91.compute-1.amazonaws.com",
    port: 5432,
    username: "vuudbwysozmuzj",
    password: "c9c3707fe676a5387944ef6731a92a350b17cb229603180449ea8e285eb08972",
    database: "d2cm98n34b3lgo",
    logging: true,
    ssl: {
        rejectUnauthorized: false
    },
    entities: [pets_entity_1.PetEntity, ngos_entity_1.NgoEntity, adopters_entity_1.AdopterEntity]
});
