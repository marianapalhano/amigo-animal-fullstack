import {createConnection } from "typeorm";
import { AdopterEntity } from "../entities/adopters.entity";
import { NgoEntity } from "../entities/ngos.entity";
import { PetEntity } from "../entities/pets.entity";

export const connection = createConnection({
    type: "postgres",
    host: "ec2-52-201-72-91.compute-1.amazonaws.com",
    port: 5432,
    username: "vuudbwysozmuzj",
    password: "",
    database: "d2cm98n34b3lgo",
    logging: true,
    ssl: {
        rejectUnauthorized: false
      },
    entities: [PetEntity, NgoEntity, AdopterEntity]
});
