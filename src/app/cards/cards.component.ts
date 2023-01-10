import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: 'cards.component.html',
})
export class CardsComponent {
  public title: string = 'Titre du card';
  public cards: any[] = [
    {
      cardsId: 1,
      cardsName: 'Hotel1',
      description: 'vue de la première description',
      price: 660.5,
      imageUrl: '../../assets/image1.jpg',
    },
    {
      cardsId: 2,
      cardsName: 'Hotel2',
      description: 'vue de la duxième description',
      price: 299.6,
      imageUrl: 'assets/image2.jpg',
    },
    {
      cardsId: 3,
      cardsName: 'Hotel3',
      description: 'vue de la troisième description',
      price: 2090.5,
      imageUrl: 'assets/image3.jpg',
    },
    {
      cardsId: 4,
      cardsName: 'Hotel4',
      description: 'vue de la quatrième description',
      price: 230.0,
      imageUrl: 'assets/image4.jpg',
    },
    {
      cardsId: 5,
      cardsName: 'Hotel5',
      description: 'vue de la cinquième description',
      price: 28.5,
      imageUrl: 'assets/image5.jpg',
    },
  ];
  public showBadge: boolean = true;

  public toggleBadge():void{
    this.showBadge=!this.showBadge;
  }

  public hotelFilter:string = 'mot';

}
