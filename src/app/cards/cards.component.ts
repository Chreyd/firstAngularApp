import { Component, OnInit } from '@angular/core';

import { ICards } from './cards';

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

  public cards: ICards[] = [
    {
      cardsId: 1,
      cardsName: 'Marrakech hotel',
      description: 'vue de la première description',
      price: 660.5,
      imageUrl: '../../assets/image1.jpg',
    },
    {
      cardsId: 2,
      cardsName: 'Casablanca hotel',
      description: 'vue de la duxième description',
      price: 299.6,
      imageUrl: 'assets/image2.jpg',
    },
    {
      cardsId: 3,
      cardsName: 'Settat hotel',
      description: 'vue de la troisième description',
      price: 2090.5,
      imageUrl: 'assets/image3.jpg',
    },
    {
      cardsId: 4,
      cardsName: 'Rabat hotel',
      description: 'vue de la quatrième description',
      price: 230.0,
      imageUrl: 'assets/image4.jpg',
    },
    {
      cardsId: 5,
      cardsName: 'Mohammedia hotel',
      description: 'vue de la cinquième description',
      price: 28.5,
      imageUrl: 'assets/image5.jpg',
    },
  ];
  public showBadge: boolean = true;
  public toggleBadge(): void {
    this.showBadge = !this.showBadge;
  }

  public filteredCards: ICards[] = [];
  ngOnInit(): void {
    this.filteredCards = this.cards;
    this.hotelFilter='mot';
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
