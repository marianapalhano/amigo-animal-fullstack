import { Ngo } from '../models/ngo.model';
import { NgosRepository } from '../repositories/ngos.repository';

export class NgosService {

    constructor() {}

    getAll() {
        return NgosRepository.getAll();
    }

    getById(id: number) {
        return NgosRepository.getById(id);
    }

    create(ngo: Ngo) {
        return NgosRepository.create(ngo);
    }
}