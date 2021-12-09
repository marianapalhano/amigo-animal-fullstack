import { Injectable } from '@angular/core';
import { Breed, Gender, Pet, Size, Species } from '../models/pet.model';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  pets: Array<Pet> = [];
  urlBackEnd = environment.urlBackEnd;
  headers = {
    'Content-type': 'application/json'
  };

  constructor(private httpClient: HttpClient) { }

  getPets() {
    return this.httpClient.get<Array<Pet>>(`${this.urlBackEnd}/pets`, { headers: this.headers });
  }

  getPetsForAdoption() {
    return this.httpClient.get<Array<Pet>>(`${this.urlBackEnd}/pets/foradoption`, { headers: this.headers });
  }

  getAdoptedPets() {
    this.getPets().subscribe(pets => {
      this.pets = pets;
    })
    return this.pets.filter(pet => pet.isAdopted === true);
  }

  getPetById(id: number) {
    return this.httpClient.get<Pet>(`${this.urlBackEnd}/pets/id/${id}`, { headers: this.headers });
  }

  adoptPet(id: number, isAdopted: boolean) {
    return this.httpClient.put(`${this.urlBackEnd}/pets/update/${id}`, { isAdopted },{ headers: this.headers });
  }

  getPetBySpecies(species: Species) {
    this.getPets().subscribe(pets => {
      this.pets = pets;
    })
    return this.pets.find(pet => pet.species === species);
  }

  createPet(pet: Pet) {
    this.pets.push(pet);
    return this.pets;
  }

  createPetObject(
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
  ) {
    return {
      id,
      imgUrl,
      name,
      gender,
      age,
      microchip,
      species,
      breed,
      size,
      city,
      state,
      ngoId,
      personality,
      inclusionDate,
      adoptionFee,
      isAdopted
    };
  }

  getDefaultPet(): Pet {
    const todaysDate = moment().format('YYYY-MM-DD');
    const nextId = this.generateNextId();
    return this.createPetObject(
      nextId,
      `../../../../../assets/img/pets/${nextId}.jpg`,
      '',
      'Fêmea',
      '',
      0,
      'Cachorro',
      'SRD',
      'Médio',
      '',
      '',
      0,
      '',
      todaysDate,
      0,
      false
    );
  }

  generateNextId(): number {
    return this.pets[(this.pets.length - 1)].id + 1;
  }

  removePet(id: number) {
    const petIndex = this.pets.findIndex((pet) => pet.id === Number(id));
    this.pets.splice(petIndex, 1);
  }
}
