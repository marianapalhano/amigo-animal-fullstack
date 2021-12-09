import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdopterDetailsComponent } from './features/adopters/pages/adopter-details/adopter-details.component';
import { AdoptersComponent } from './features/adopters/pages/adopters/adopters.component';
import { RegisterComponent } from './features/adopters/pages/register/register.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { HowtoHelpComponent } from './features/howto-help/pages/howto-help/howto-help.component';
import { LoginComponent } from './features/login/pages/login/login.component';
import { NgosComponent } from './features/ngos/pages/ngos/ngos.component';
import { PetDetailsComponent } from './features/pets/pages/pet-details/pet-details.component';
import { PetsComponent } from './features/pets/pages/pets/pets.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'pet-details/:id', component: PetDetailsComponent },
  { path: 'ngos', component: NgosComponent },
  { path: 'howto-help', component: HowtoHelpComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adopters', component: AdoptersComponent, canActivate: [AuthGuard] },
  { path: 'adopter-details/:id', component: AdopterDetailsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
