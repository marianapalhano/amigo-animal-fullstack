import { getConnection } from "typeorm";
import { NgoEntity } from "../entities/ngos.entity";
import { Ngo } from "../models/ngo.model";

export class NgosRepository {
    public static getAll() {
        return getConnection()
        .getRepository(NgoEntity)
        .find();
    }

    public static getById(id: number) {
        return getConnection()
        .getRepository(NgoEntity)
        .findOne({ id });
    }

    public static create(ngo: Partial<Ngo>) {
        return getConnection()
        .getRepository(NgoEntity)
        .insert(ngo);
    }

    public static update(id: number, ngo: Partial<Ngo>) {
        return getConnection()
        .getRepository(NgoEntity)
        .update({ id }, ngo);
    }

    public static remove(id: number) {
        return getConnection()
        .getRepository(NgoEntity)
        .delete({ id });
    }
}