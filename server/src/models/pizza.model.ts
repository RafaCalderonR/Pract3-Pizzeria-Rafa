import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    name: String,
    ingredients: Array,
    basePrice: String,
    image: String
});

export interface IPizza extends Document {
    name: string;
    ingredients: Array<string>;
    basePrice: number;
    image: string
}

export default model<IPizza>('Pizza', schema);
