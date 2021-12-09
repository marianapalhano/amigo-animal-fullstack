import { Pet } from '../models/pet.model';
import { PetsRepository } from '../repositories/pets.repository';

export class PetsService {

    constructor() {}

    getAll() {
        return PetsRepository.getAll();
    }

    getById(id: number) {
        return PetsRepository.getById(id);
    }

    getByAdoption() {
        return PetsRepository.getByAdoption();
    }

    create(pet:Pet) {
        return PetsRepository.create(pet);
    }

    async update(isAdopted: boolean, id: string) {
        const adopter = await PetsRepository.getById(parseInt(id));
        if(adopter) {
            await PetsRepository.update(parseInt(id), { isAdopted });
            return true;
        } else {
            return false;
        }
    }
}