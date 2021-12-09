import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Adopter } from '../models/adopter.model';
import { ResponseMessage } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class AdoptersService {
  //public adopters: BehaviorSubject<Array<Adopter>> = new BehaviorSubject<Array<Adopter>>([]);
  urlBackEnd = environment.urlBackEnd;
  headers = {
    'Content-type': 'application/json' 
  }

  constructor(private httpClient: HttpClient) { }

  getAdopters() {
    return this.httpClient.get<Array<Adopter>>(`${this.urlBackEnd}/adopters`, { headers: this.headers });
  }

  getAdopterById(id: number | undefined) {
    return this.httpClient.get<Adopter>(`${this.urlBackEnd}/adopters/id/${id}`, { headers: this.headers });
  }

  // getAdopterByName(name: string) {
  //   return this.adopters.find((adopter) => adopter.name === name);
  // }

  getAdopterByEmailAndPassword(email: string, password: string) {
    const body = {
      email,
      password
    }
    return this.httpClient.post<Adopter>(`${this.urlBackEnd}/adopters/authenticate`, body, { headers: this.headers });
  }

  getDefaultAdopter(): Adopter {
    return {
      cpf: 99999999999,
      name: '',
      birthdate: '1970-01-01',
      email: '',
      password: '',
      phone: 999999999,
      address: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      pets: []
    }
  }

  createAdopter(adopter: Adopter) {
    return this.httpClient.post<Adopter>(`${this.urlBackEnd}/adopters/create`, adopter, { headers: this.headers });
  } 

  addPetToAdopter(adopterId: number | undefined, pets: number[]) {
    return this.httpClient.put(`${this.urlBackEnd}/adopters/adoption/${adopterId}`, { pets }, { headers: this.headers });
  }

  removeAdopter(id: number | undefined) {
    return this.httpClient.delete<ResponseMessage>(`${this.urlBackEnd}/adopters/remove/${id}`, { headers: this.headers });
  }
}
