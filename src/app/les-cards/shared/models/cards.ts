export interface ICards{
  cardsId: number;
  cardsName: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;

}

/*  export class IsCards implements ICards{
  constructor(
    cardsId: number,
    cardsName: string,
    description: string,
    price: number,
    imageUrl: string,
  ){ }

  getPrice(price:number):number{
    return price -2;
  }
}
 */
