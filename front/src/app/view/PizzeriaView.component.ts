import { IPizza } from '../model/pizza.model';
import { PizzaComponentView } from './pizzaView.component';
import { IIngredient } from '../model/ingredient.model';
import { IngredientComponentView } from './ingredientView.component';
import {  BOOTSTRAP } from '../constants/boostrap.constants';
import {  ShoppingCart } from '../model/shoppingCart.model';

export class PizzeriaView {
  private galeryPremade: HTMLElement;
  private galeryIngredients: HTMLElement;
  private preselectedDiv: HTMLElement;
  private shoppingCart: HTMLElement;

  constructor(private view: Document) {
    this.galeryPremade = this.view.createElement('galery-premade');
    this.galeryIngredients = this.view.createElement('galey-Ingredient');
    this.preselectedDiv = this.view.createElement('preselected');
    this.shoppingCart = this.view.createElement('shopping');
    this.init();
  }

  init() {
    this.createGaleryPremade();
    this.createGaleryIngredients();
    this.createPreselectedDiv();
    this.createShoppingCart();
  }

  private createShoppingCart() {
    this.shoppingCart.className = BOOTSTRAP.CARDGROUP;
    this.shoppingCart.setAttribute('id', 'shopping-cart2');
    this.view.getElementById('shopping-cart').appendChild(this.shoppingCart);
  }

  private createGaleryPremade() {
    this.galeryPremade.className = BOOTSTRAP.CARDGROUP;
    this.galeryPremade.setAttribute('id', 'galeryPremade');
    this.view.getElementById('prepared-pizza').appendChild(this.galeryPremade);
  }

  private createGaleryIngredients() {
    this.galeryIngredients.className = BOOTSTRAP.CARDGROUP;
    this.galeryIngredients.setAttribute('id', 'galeryIngredients');
    this.view.getElementById('ingredient').appendChild(this.galeryIngredients);
  }

  private createPreselectedDiv() {
    this.preselectedDiv.className = 'preselected';
    this.preselectedDiv.setAttribute('id', 'preselected');
    this.view.getElementById('preselected').appendChild(this.preselectedDiv);
  }

  public displayPizzas(pizzaStorage: Array<IPizza>) {
    pizzaStorage.map(
      pizza => new PizzaComponentView(this.galeryPremade, this.view, pizza),
    );
  }

  public displayIngredients(ingredientStorage) {
    ingredientStorage.map(
      ingredient =>
        new IngredientComponentView(
          this.galeryIngredients,
          this.view,
          ingredient,
        ),
    );
  }

  public getPizzaEvent() {
    this.view.getElementById('galeryPremade').addEventListener('click', e => {
      (e.target as HTMLInputElement).value;
    });
  }

  bindAddPizza(handler: Function) {
    this.galeryPremade.addEventListener('click', event => {
      if ((event.target as HTMLInputElement).hasAttribute('value')) {
        handler({ idPizza: (event.target as HTMLInputElement).value });
      }
    });
  }

  bindAddIngredien(handler: Function) {
    this.galeryIngredients.addEventListener('click', event => {
      if ((event.target as HTMLInputElement).hasAttribute('value')) {
        handler({ idIngredient: (event.target as HTMLInputElement).value });
      }
    });
  }

  bindAddPreselected(handler: Function) {
    this.preselectedDiv.addEventListener('click', event => {
      if ((event.target as HTMLInputElement).hasAttribute('value')) {
        handler(
          ((event.target as HTMLInputElement)
            .previousSibling as HTMLSelectElement).value,
        );
      }
    });
  }

  public displayPizzaPreselected(pizza) {
    this.preselectedDiv.innerHTML = '';
    new PizzaComponentView(this.preselectedDiv, this.view, pizza);
  }

  displayShoppingCart(shoppingCart: ShoppingCart) {
    /**Hay que cambiar el css para que te pinte bien el carrito */
    this.shoppingCart.innerHTML = '';

      console.log(shoppingCart)
      /*shoppingCart.order.map(
      pizza => new PizzaComponentView(this.shoppingCart, this.view, pizza),
      */
    
  }
}
