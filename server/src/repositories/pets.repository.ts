import { getConnection } from "typeorm";
import { PetEntity } from "../entities/pets.entity";
import { Pet } from "../models/pet.model";

export class PetsRepository {
    public static getAll() {
        return getConnection()
        .getRepository(PetEntity)
        .find();
    }

    public static getByAdoption() {
        return getConnection()
        .getRepository(PetEntity)
        .find({where: { isAdopted: false }});
    }

    public static getById(id: number) {
        return getConnection()
        .getRepository(PetEntity)
        .findOne({ id });
    }

    public static create(pet: Partial<Pet>) {
        return getConnection()
        .getRepository(PetEntity)
        .insert(pet);
    }

    public static update(id: number, pet: Partial<Pet>) {
        return getConnection()
        .getRepository(PetEntity)
        .update({ id }, pet);
    }

    public static remove(id: number) {
        return getConnection()
        .getRepository(PetEntity)
        .delete({ id });
    }
}