import { PizzeriaView } from '../view/PizzeriaView.component';
import { StorageService } from '../service/storage.service';

export class PizzaController {
  constructor(
    private storageService: StorageService,

    private pizzeriaView: PizzeriaView,
  ) {
    this.loadFetch();

    this.pizzeriaView.bindAddPizza(this.handleAddPizza.bind(this));
    this.pizzeriaView.bindAddIngredien(this.handleAddIngredient.bind(this));
    this.pizzeriaView.bindAddPreselected(this.handlePreselect.bind(this));
  }

  loadFetch() {
    this.storageService.startStorage().then(() => {
      this.createPizzaComponent();
      this.createIngredientComponent();
    });
  }

  createPizzaComponent() {
    this.pizzeriaView.displayPizzas(this.storageService.pizzasStorage);
  }

  createIngredientComponent() {
    this.pizzeriaView.displayIngredients(this.storageService.ingredientStorage);
  }

  handleAddPizza(id) {
    this.storageService.savePreselected(id);
    this.displayPizzaPreslect();
  }

  handleAddIngredient(id) {
    this.storageService.findIngredient(id);
    this.displayPizzaPreslect();
  }

  displayPizzaPreslect() {
      this.pizzeriaView.displayPizzaPreselected(
      this.storageService.pizzaPreSelected,
    );
  }

  handlePreselect(size) {
   
    this.storageService.addToShoppingCart(size);
    this.displayShoppingCart();
  }

  displayShoppingCart() {
    this.pizzeriaView.displayShoppingCart(this.storageService.shoppingCart);
  }
}
