import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ngo } from '../models/ngo.model';

@Injectable({
  providedIn: 'root'
})
export class NgosService {
  ngos: Array<Ngo> = [];
  urlBackEnd = environment.urlBackEnd;
  headers = {
    'Content-type': 'application/json'
  };

  constructor(private httpClient: HttpClient) { }

  getNgos() {
    return this.httpClient.get<Array<Ngo>>(`${this.urlBackEnd}/ngos`, { headers: this.headers });
  }

  getNgoById(id: number) {
    return this.httpClient.get<Ngo>(`${this.urlBackEnd}/ngos/id/${id}`, { headers: this.headers });
  }
}
