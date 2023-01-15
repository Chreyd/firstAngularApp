import { NgModule } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { CardsDetailComponent } from './cards-details/cards-detail.component';
import { RouterModule } from '@angular/router';
import { CardsDetailGuard } from './shared/guards/cards-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { CardsRootingModule } from './cards-rooting.module';



@NgModule({
  declarations: [
    CardsComponent,
    CardsDetailComponent,

  ],
  imports: [

    CardsRootingModule,
    SharedModule,
  ]
})
export class CardsModule { }
