import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardsComponent } from './cards/cards.component';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ReplaceComma } from './shared/pipes/replaca-comma.pipe';
/* import fr from '@angular/common/locales/fr';
 */
import { StarRatingComponent } from './shared/components/star-rating/star-rating.component';

registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ReplaceComma,
    StarRatingComponent
  ],
  imports: [
  BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
