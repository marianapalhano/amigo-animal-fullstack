import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { MsgDialogComponent } from './dialogs/msg-dialog/msg-dialog.component';
import { CpfPipe } from './pipes/cpf/cpf.pipe';
import { CpfValidator } from './validators/cpf/cpf-validator.directive';
import { PhonePipe } from './pipes/phone/phone.pipe';

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule
];

const components = [
  HeaderComponent,
  FooterComponent,
  MsgDialogComponent
];

@NgModule({
  declarations: [
    ...components,
    CpfPipe,
    CpfValidator,
    PhonePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    HttpClientModule,
    ...materialModules
  ],
  exports: [
    ...components,
    ...materialModules,
    CpfPipe,
    CpfValidator,
    PhonePipe,
    HttpClientModule
  ]
})
export class SharedModule { }
