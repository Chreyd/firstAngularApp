import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardsComponent } from './cards/cards.component';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

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
