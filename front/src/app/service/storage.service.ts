import { IPizza } from '../model/pizza.model';
import { IIngredient } from '../model/ingredient.model';
import { ShoppingCart } from '../model/shoppingCart.model';

export class StorageService {
  private _pizzasStorage: IPizza[] = [];
  private _ingredientStorage: IIngredient[] = [];
  private _pizzaPreSelected: IPizza;
  private _shoppingCart = new ShoppingCart();

 

  getData(endpoint) {
    return fetch(endpoint).then(data => data.json());
  }

  public startStorage(): Promise<any> {
    return Promise.all([
      this.getData(process.env.ENDPOINTPIZZAS).then(
        data => (this._pizzasStorage = data),
      ),

      this.getData(process.env.ENDPOINTINGREDIENT).then(
        data => (this._ingredientStorage = data),
      ),
    ]);
  }

  savePreselected({ idPizza }) {
    this._pizzaPreSelected = this._pizzasStorage.find(
      pizzas => pizzas._id === idPizza,
    );
  }

  addIngredientToPreselected({ name, basePrice }: IIngredient) {
    this.pizzaPreSelected.basePrice =
      Number(this.pizzaPreSelected.basePrice) + Number(basePrice);
    this.pizzaPreSelected.ingredients.push(name as unknown  as IIngredient);
  }

  findIngredient({ idIngredient }) {
    this.addIngredientToPreselected(
      this._ingredientStorage.find(
        ingredients => ingredients._id === idIngredient,
      ),
    );
  }

  addToShoppingCart(priceSize: number) {
    
    const totalPricePizza = this.pizzaPreSelected.basePrice * Number(priceSize);
    console.log(typeof totalPricePizza)
    
    this.shoppingCart.totalPrice = totalPricePizza ;
    this.shoppingCart.setOrder(this._pizzaPreSelected);
 
   
   
  }

  get pizzasStorage(): IPizza[] {
    return this._pizzasStorage;
  }

  get ingredientStorage(): IIngredient[] {
    return this._ingredientStorage;
  }

  get pizzaPreSelected(): IPizza {
    return this._pizzaPreSelected;
  }

  get shoppingCart(): ShoppingCart {
    return this._shoppingCart;
  }

  /**Arreglar : Conflicto de los get and set por los tipados de los  array  */
}
