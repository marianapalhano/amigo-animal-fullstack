import { getConnection } from "typeorm";
import { AdopterEntity } from "../entities/adopters.entity";
import { Adopter } from "../models/adopter.model";

export class AdoptersRepository {
    public static getAll() {
        return getConnection()
        .getRepository(AdopterEntity)
        .find();
    }

    public static getById(id: number) {
        return getConnection()
        .getRepository(AdopterEntity)
        .findOne({ id });
    }

    public static findByEmailAndPassword(email: string, password: string) {
        return getConnection()
        .getRepository(AdopterEntity)
        .findOne({ email, password });
    }

    public static create(adopter: Partial<Adopter>) {
        return getConnection()
        .getRepository(AdopterEntity)
        .insert(adopter);
    }

    public static update(id: number, adopter: Partial<Adopter>) {
        return getConnection()
        .getRepository(AdopterEntity)
        .update({ id }, adopter);
    }

    public static makeAdoption(id: number, adopter: Partial<Adopter>) {
        return getConnection()
        .getRepository(AdopterEntity)
        .update({ id }, adopter);
    }

    public static remove(id: number) {
        return getConnection()
        .getRepository(AdopterEntity)
        .delete({ id });
    }
}