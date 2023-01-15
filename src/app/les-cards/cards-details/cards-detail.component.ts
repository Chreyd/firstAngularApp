import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelListService } from '../shared/services/cards.service';
import { ICards } from '../shared/models/cards';

@Component({
  selector: 'app-cards-detail',
  templateUrl: './cards-detail.component.html',
  styleUrls: ['./cards-detail.component.css']
})
export class CardsDetailComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,

    private hotelService: HotelListService,
    private router: Router,
  ){}

  public backToListe():void{
    this.router.navigate([
      '/hotels'
    ])
  }

    public hotel: ICards | undefined= <ICards>{};

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.hotelService.getCards().subscribe((cards:ICards[])=>{
      this.hotel = cards.find(hotel=> hotel.cardsId==id) as  ICards;
      console.log('HOTEL: ',this.hotel );
    })

/*     const id: number = +!this.route.snapshot.paramMap.get('id');
 *//*     const id : number = +this.route.snapshot.paramMap. get('id');
 */  }


}
