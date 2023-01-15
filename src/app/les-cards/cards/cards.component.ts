import { Component, OnInit } from '@angular/core';

import { ICards } from '../shared/models/cards';
import { HotelListService } from '../shared/services/cards.service';

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
  public errorMsg: any;
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
    this.hotelFilter='';
    this.hotelListService.getCards().subscribe({
      next: cards=> {
        this.cards = cards;
        this.filteredCards = this.cards;

      },
      error: err => this.errorMsg = err
    }
    );
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
