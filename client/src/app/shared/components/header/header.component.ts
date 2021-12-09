import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adopter } from 'src/app/features/adopters/models/adopter.model';
import { LoginService } from 'src/app/features/login/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  adopter?: Adopter;
  isUserLoggedIn: boolean = false;

  constructor(private router: Router, private loginService: LoginService) {
    this.loginService.loggedAdopter.subscribe( value => {
      if(value) {
        this.adopter = value;
        this.isUserLoggedIn = true;
      } else {
        this.isUserLoggedIn = false;
      }
      
  });
  }

  ngOnInit(): void {

  }

  exit() {
    this.loginService.logoutAdopter();
    this.router.navigateByUrl('/login');
  }

}
