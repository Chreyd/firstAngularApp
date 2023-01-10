import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardsComponent } from './cards/cards.component';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
/* import fr from '@angular/common/locales/fr';
 */
registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
