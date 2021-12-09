import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';

import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
import { NgosModule } from './features/ngos/ngos.module';
import { PetsModule } from './features/pets/pets.module';
import { AdoptersModule } from './features/adopters/adopters.module';
import { HowtoHelpModule } from './features/howto-help/howto-help.module';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { SharedModule } from './shared/shared.module';
registerLocaleData(localePt); 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    LoginModule,
    NgosModule,
    PetsModule,
    AdoptersModule,
    HowtoHelpModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: true
    }),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
