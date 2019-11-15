import { IPizza } from '../model/pizza.model';
import { BOOTSTRAP } from '../constants/boostrap.constants';
import { sizes } from '../model/sizes.enum';

export class PizzaComponentView {
  private divCard: HTMLElement;
  private imgPizza: HTMLElement;
  private divContainer: HTMLElement;
  private tittlePizza: HTMLElement;
  private ingredientsParagraph: HTMLElement;
  private priceLabel: HTMLElement;
  private addButton: HTMLElement;
  private selectSize: HTMLElement;

  constructor(
    private rootNode,
    private view: Document,
    private pizzaData: IPizza,
  ) {
    this.rootNode = rootNode;
    this.divCard = this.view.createElement('div');
    this.imgPizza = this.view.createElement('img');
    this.divContainer = this.view.createElement('div');
    this.tittlePizza = this.view.createElement('label');
    this.ingredientsParagraph = this.view.createElement('p');
    this.priceLabel = this.view.createElement('h5');
    this.addButton = this.view.createElement('button');
    this.selectSize = this.view.createElement('Select');

    this.generatePIzzaComponent(this.pizzaData);
  }

  private createCard() {
    this.divCard.className = BOOTSTRAP.CARDCENTER;
    this.rootNode.appendChild(this.divCard);
  }

  private createImgPizza({ image }: IPizza) {
    this.imgPizza.className = BOOTSTRAP.IMAGE;
    this.imgPizza.setAttribute('src', image);
    this.divCard.appendChild(this.imgPizza);
  }

  private createDivContainer() {
    this.divContainer.className = BOOTSTRAP.CARDBODY;
    this.divCard.appendChild(this.divContainer);
  }

  private createTittlePizza({ name }: IPizza) {
    this.tittlePizza.className = BOOTSTRAP.CARDTITTLE;
    this.tittlePizza.innerHTML = name;
    this.divContainer.appendChild(this.tittlePizza);
  }

  private createLabelPrice({ basePrice }: IPizza) {
    this.priceLabel.innerText = `${basePrice}$`;
    this.divContainer.appendChild(this.priceLabel);
  }

  private createLabelIngredient({ ingredients }: IPizza) {
    this.divContainer.appendChild(this.ingredientsParagraph);

    ingredients.map(data => {
      this.ingredientsParagraph.innerHTML += `${data} </br>`;
    });
  }

  private createButton({ _id }: IPizza) {
    this.addButton.className = BOOTSTRAP.BUTTONSELECT;
    this.addButton.setAttribute('value', _id);
    this.addButton.innerText = 'select';
    this.divContainer.appendChild(this.addButton);
  }

  private createSelectSize() {

    /**quitar el innerHtml y añadir el select de forma correcta*/
    this.selectSize.innerHTML = `<select class="form-control form-control-sm" value='${sizes.small}'>
                                <option value=${sizes.big}>Big</option>
                                <option value=${sizes.medium}>Medium</option>
                                <option value=${sizes.small}>Small</option>
    
                                   </select>`;

    this.divContainer.appendChild(this.selectSize);
  }

  createOptions() {}

  generatePIzzaComponent(pizzaData: IPizza) {
    this.createCard();
    this.createImgPizza(pizzaData);
    this.createDivContainer();
    this.createTittlePizza(pizzaData);
    this.createLabelPrice(pizzaData);
    this.createLabelIngredient(pizzaData);
    this.createSelectSize();
    this.createButton(pizzaData);
  }
}
