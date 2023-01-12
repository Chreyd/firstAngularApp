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
import { HomeComponent } from './home/home.component';
import { CardsDetailComponent } from './cards/cards-detail/cards-detail.component';
import { RouterModule } from '@angular/router';
import { CardsDetailGuard } from './cards/cards-detail.guard';

registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ReplaceComma,
    StarRatingComponent,
    HomeComponent,
    CardsDetailComponent
  ],
  imports: [
  BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component:HomeComponent},
      {path: '', redirectTo:'home', pathMatch: 'full'},
      {path: 'hotel/:id', component:CardsDetailComponent, canActivate: [CardsDetailGuard]},
      {path: 'hotels', component: CardsComponent},
      {path: '**', redirectTo:'home',pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
