import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdoptersService } from 'src/app/features/adopters/services/adopters.service';
import { LoginService } from '../../services/login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  error: boolean = false;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Você deve informar um email';
    }
    return this.email.hasError('email') ? 'Não é um email válido' : '';
  }

  getPasswordErrorMessage() {    
    if (this.password.hasError('required')) {
      return 'Você deve informar uma senha';
    }
    return this.password.hasError('minlength') ? 'Não é uma senha válida' : '';
  }

  constructor(
    private adoptersService: AdoptersService,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  authenticate(event: any) {
    event.preventDefault();
    this.adoptersService.getAdopterByEmailAndPassword(this.email.value, this.password.value)
      .subscribe((adopter) => {
          this.loginService.setLoggedAdopter(adopter);
          this.router.navigateByUrl(`adopter-details/${adopter.id}`);          
      }, (err) => {
        console.log(err);
        this.error = true;
      })
  };

}
