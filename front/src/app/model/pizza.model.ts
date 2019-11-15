import { IIngredient } from './ingredient.model';


export interface IPizza {
  name: string;
  ingredients: IIngredient[];
  basePrice: number;
  image: string;
  _id: string;
}
