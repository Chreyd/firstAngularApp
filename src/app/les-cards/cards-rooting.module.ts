import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardsDetailComponent } from './cards-details/cards-detail.component';
import { CardsComponent } from './cards/cards.component';
import { CardsDetailGuard } from './shared/guards/cards-detail.guard';



@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'hotel/:id', component:CardsDetailComponent, canActivate: [CardsDetailGuard]},
      {path: 'hotels', component: CardsComponent},
    ]),
  ],
  exports:[
    RouterModule
  ]
})
export class CardsRootingModule { }
