import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    name: String,
    basePrice: String,
    image: String
});

export interface IIngredient extends Document {
    name: string;
    basePrice: number;
    image: string;
}

export default model<IIngredient>('Ingredient', schema);
