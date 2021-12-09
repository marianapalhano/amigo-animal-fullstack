import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdoptersComponent } from './pages/adopters/adopters.component';
import { RegisterComponent } from './pages/register/register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdopterComponent } from './components/adopter/adopter.component';
import { AdopterListComponent } from './components/adopter-list/adopter-list.component';
import { AdopterDetailsComponent } from './pages/adopter-details/adopter-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { PetsModule } from '../pets/pets.module';


@NgModule({
  declarations: [
    AdoptersComponent,
    RegisterComponent,
    AdopterComponent,
    AdopterListComponent,
    AdopterDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PetsModule,
    NgxMaskModule.forChild()
  ]
})
export class AdoptersModule { }
