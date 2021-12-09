import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgosComponent } from './pages/ngos/ngos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgoComponent } from './components/ngo/ngo.component';
import { NgoListComponent } from './components/ngo-list/ngo-list.component';


@NgModule({
  declarations: [
    NgosComponent,
    NgoComponent,
    NgoListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class NgosModule { }
