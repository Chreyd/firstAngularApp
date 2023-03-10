import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
/* import fr from '@angular/common/locales/fr';
 */
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CardsModule } from './les-cards/cards.module';
import { AppRootingModule } from './app-rooting.module';

registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
  BrowserModule,
    FormsModule,
    HttpClientModule,

    CardsModule,
    AppRootingModule

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
