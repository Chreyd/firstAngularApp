import { Component, OnInit } from '@angular/core';

import { ICards } from './cards';
import { HotelListService } from './cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  /*  ngOnInit(): void {
    throw new Error('Method not implemented.');
  } */

  public title: string = 'Titre du card';

  public receivedRatying: string | undefined;
  public receiveRatyingClick(message:string): void{
    this.receivedRatying= message;
  }

  public cards: ICards[]=[] ;

  constructor(private hotelListService :HotelListService){

  }
  public showBadge: boolean = true;
  public toggleBadge(): void {
    this.showBadge = !this.showBadge;
  }

  public filteredCards: ICards[] = [];
  ngOnInit(): void {
    this.filteredCards = this.cards;
    this.hotelFilter='';
    this.cards=this.hotelListService.getCards();
  }

  private _hotelFilter: string = 'mot';
  public get hotelFilter(): string{
    return this._hotelFilter;
  }
  public set hotelFilter(filter:string){
    this._hotelFilter=filter;
    this.filteredCards= this.hotelFilter ? this.filterHotels(this.hotelFilter): this.cards;
  /* terner */
  }

  private filterHotels(criter:string): ICards[]{
    criter= criter.toLowerCase();
    const res= this.cards.filter(
      (hotel:ICards)=> hotel.cardsName.toLowerCase().indexOf(criter)!=-1
    );
    return res;
  }

}
