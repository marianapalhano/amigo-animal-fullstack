import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowtoHelpComponent } from './pages/howto-help/howto-help.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HowtoHelpComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HowtoHelpModule { }
