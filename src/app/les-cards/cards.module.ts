import { NgModule } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { CardsDetailComponent } from './cards-details/cards-detail.component';
import { RouterModule } from '@angular/router';
import { CardsDetailGuard } from './shared/guards/cards-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CardsComponent,
    CardsDetailComponent,

  ],
  imports: [

    RouterModule.forChild([
      {path: 'hotel/:id', component:CardsDetailComponent, canActivate: [CardsDetailGuard]},
      {path: 'hotels', component: CardsComponent},
    ]),
    SharedModule,
  ]
})
export class CardsModule { }
