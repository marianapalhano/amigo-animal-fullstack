export type Gender = 'Macho' | 'Fêmea';
export type Species = 'Cachorro' | 'Gato' | 'Roedor' | 'Pássaro';
export type Breed = 'SRD' | 'Poodle' | 'Labrador' | 'Siames' | 'Angora' | 'Maltês';
export type Size = 'Pequeno' | 'Médio' | 'Grande';

export interface Pet {
    id: number,
    imgUrl: string,
    name: string,
    gender: Gender,
    age: string,
    microchip: number,
    species: Species,
    breed: Breed,
    size: Size,
    city: string,
    state: string,
    ngoId: number,
    personality: string,
    inclusionDate: Date | string,
    adoptionFee: number,
    isAdopted: boolean
}