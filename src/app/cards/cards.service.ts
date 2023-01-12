import { Injectable } from "@angular/core";
import { ICards } from './cards';


@Injectable(
  {
    providedIn:'root'
  }
)

export class HotelListService {

  public getCards():ICards[] {
    return [
      {
        cardsId: 1,
        cardsName: 'Marrakech hotel',
        description: 'vue de la première description',
        price: 660.5,
        imageUrl: '../../assets/image1.jpg',
        rating: 3
      },
      {
        cardsId: 2,
        cardsName: 'Casablanca hotel',
        description: 'vue de la duxième description',
        price: 299.6,
        imageUrl: 'assets/image2.jpg',
        rating: 2.5
      },
      {
        cardsId: 3,
        cardsName: 'Settat hotel',
        description: 'vue de la troisième description',
        price: 2090.5,
        imageUrl: 'assets/image3.jpg',
        rating: 4.5
      },
      {
        cardsId: 4,
        cardsName: 'Rabat hotel',
        description: 'vue de la quatrième description',
        price: 230.0,
        imageUrl: 'assets/image4.jpg',
        rating: 4
      },
      {
        cardsId: 5,
        cardsName: 'Mohammedia hotel',
        description: 'vue de la cinquième description',
        price: 28.5,
        imageUrl: 'assets/image5.jpg',
        rating: 5
      },
    ];
  }
}
