import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Adopter } from '../../models/adopter.model';
import { AdoptersService } from '../../services/adopters.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MsgDialogComponent } from 'src/app/shared/dialogs/msg-dialog/msg-dialog.component';
import { validatesCpf } from 'src/app/shared/validators/cpf/cpf-validator.directive';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import { LoginService } from 'src/app/features/login/services/login.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class RegisterComponent implements OnInit {

  adopter: Adopter = this.adoptersService.getDefaultAdopter();

  hide = true;

  registerForm = new FormGroup({
    cpf: new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(11), validatesCpf()]),
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    birthdate: new FormControl('', Validators.required),  
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),    
    phone: new FormControl('', [Validators.required, Validators.minLength(8)]),
    address: new FormControl('', [Validators.required, Validators.minLength(6)]),
    complement: new FormControl(''),
    neighborhood: new FormControl('', [Validators.required, Validators.minLength(5)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    state: new FormControl('', [Validators.required])
  });  

  constructor(
    private adoptersService: AdoptersService, 
    private router: Router,
    public dialog: MatDialog,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const formValue = this.registerForm.value;
    this.adopter.cpf = Number(formValue.cpf);
    this.adopter.name = formValue.name;
    this.adopter.birthdate = formValue.birthdate;
    this.adopter.email = formValue.email;
    this.adopter.password = formValue.password;
    this.adopter.phone = formValue.phone;
    this.adopter.address = formValue.address;
    this.adopter.complement = formValue.complement;
    this.adopter.neighborhood = formValue.neighborhood;
    this.adopter.city = formValue.city;
    this.adopter.state = formValue.state;

    this.adoptersService.createAdopter(this.adopter).subscribe(adopter => {
      this.loginService.setLoggedAdopter(this.adopter);
      this.dialog.open(MsgDialogComponent, {
        width: '320px',
        data: { title: 'Sucesso', message: 'Cadastro realizado.'}
      });
    }, err => {
      console.log(err);
    });
        
    this.router.navigateByUrl(`adopter-details/${this.adopter.id}`);
  }

}
