import {createConnection } from "typeorm";
import { AdopterEntity } from "../entities/adopters.entity";
import { NgoEntity } from "../entities/ngos.entity";
import { PetEntity } from "../entities/pets.entity";

export const connection = createConnection({
    type: "postgres",
    host: "",
    port: 5432,
    username: "",
    password: "",
    database: "",
    logging: true,
    ssl: {
        rejectUnauthorized: false
      },
    entities: [PetEntity, NgoEntity, AdopterEntity]
});
