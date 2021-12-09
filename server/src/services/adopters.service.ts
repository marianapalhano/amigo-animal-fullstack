import { Adopter } from "../models/adopter.model";
import { AdoptersRepository } from "../repositories/adopters.repository";

export class AdoptersService {

    constructor() {}

    getAll() {
        return AdoptersRepository.getAll();
    }

    getById(id: number) {
        return AdoptersRepository.getById(id);
    }

    getByEmailAndPassword(email: string, password: string) {
        return AdoptersRepository.findByEmailAndPassword(email, password);
    }

    create(adopter: Adopter) {
        return AdoptersRepository.create(adopter);
    }

    async update(name: string, email: string, id: string) {
        const adopter = await AdoptersRepository.getById(parseInt(id));
        if(adopter) {
            await AdoptersRepository.update(parseInt(id), { name, email });
            return true;
        } else {
            return false;
        }
    }

    async makeAdoption(pets: Array<number>, id: string) {
        const adopter = await AdoptersRepository.getById(parseInt(id));
        if(adopter) {
            await AdoptersRepository.makeAdoption(parseInt(id), { pets });
            return true;
        } else {
            return false;
        }
    }

    async remove(id: string) {
        const adopter = await AdoptersRepository.getById(parseInt(id));
        if (adopter) {
            await AdoptersRepository.remove(parseInt(id));
            return true;
        } else {
            return false;
        }
    }
}