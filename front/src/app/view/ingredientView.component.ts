import { IIngredient } from '../model/ingredient.model';
import {  BOOTSTRAP } from '../constants/boostrap.constants';

export class IngredientComponentView {
  private divCard: HTMLElement;
  private imgIngredient: HTMLElement;
  private addButton: HTMLElement;

  constructor(
    private rootNode,
    private view: Document,
    private ingrendientData: IIngredient,
  ) {
    this.rootNode = rootNode;
    this.divCard = this.view.createElement('div');
    this.imgIngredient = this.view.createElement('img');
    this.addButton = this.view.createElement('button');

    this.generateIngredient(this.ingrendientData);
  }

  private createDiv() {
    this.divCard.className = 'card text-center';
    this.rootNode.appendChild(this.divCard);
  }

  private createImgIngredient({ image }: IIngredient) {
    this.imgIngredient.className = BOOTSTRAP.IMAGE;
    this.imgIngredient.setAttribute('src', `${image}`);
    this.imgIngredient.setAttribute('alt', 'ingredient');
    this.divCard.appendChild(this.imgIngredient);
  }

  private createButton({ _id }: IIngredient) {
    this.addButton.className = BOOTSTRAP.BUTTONADD;
    this.addButton.setAttribute('value', _id);
    this.addButton.innerText = 'add';

    this.divCard.appendChild(this.addButton);
  }

  generateIngredient(ingrendientData) {
    this.createDiv();
    this.createImgIngredient(ingrendientData);
    this.createButton(ingrendientData);
  }
}
