import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Adopter } from '../../adopters/models/adopter.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loggedAdopter: BehaviorSubject<Adopter | undefined> = new BehaviorSubject<Adopter | undefined>(undefined);

  constructor() { }

  setLoggedAdopter(adopter: Adopter): void {
    this.loggedAdopter.next(adopter);
  }

  getLoggedAdopter() {
    return this.loggedAdopter.value;
  }

  logoutAdopter() {
    this.loggedAdopter.next(undefined);
  }
}
