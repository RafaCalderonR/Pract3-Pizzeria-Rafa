import { IPizza } from './pizza.model';

export class ShoppingCart {

  private _order : IPizza[] = [];
  private _totalPrice: number = 0;


  get order(): IPizza[]{
    return this._order
  }

  /**
   * Arreglar set order y borrar setOrder:
   * Argument of type 'IPizza[]' is not assignable to parameter of type 'IPizza'.
  Type 'IPizza[]' is missing the following properties from type 'IPizza': name, ingredients, basePrice, image, _idts(2345) */

  
  setOrder(pizza){
    this._order.push(pizza)
  }

  get totalPrice():number{
    return this._totalPrice
  }

  set totalPrice(money){
    this._totalPrice = this._totalPrice + money
  }

}
 