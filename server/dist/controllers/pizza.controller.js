"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pizza_model_1 = __importDefault(require("../models/pizza.model"));
async function getPizzas(req, res) {
    const character = await pizza_model_1.default.find();
    return res.json(character);
}
exports.getPizzas = getPizzas;
;
async function createPizza(req, res) {
    const { name, ingredients, basePrice, image, } = req.body;
    const pizza = new pizza_model_1.default({
        name,
        ingredients,
        basePrice,
        image,
    });
    await pizza.save();
    return res.json({ message: 'Successfully updated ', pizza });
}
exports.createPizza = createPizza;
;
