"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ingredent_model_1 = __importDefault(require("../models/ingredent.model"));
async function getIngredients(req, res) {
    const character = await ingredent_model_1.default.find();
    return res.json(character);
}
exports.getIngredients = getIngredients;
;
async function createIngredient(req, res) {
    const { name, ingredients, basePrice, image, } = req.body;
    const ingredient = new ingredent_model_1.default({
        name,
        ingredients,
        basePrice,
        image,
    });
    await ingredient.save();
    return res.json({ message: 'Successfully updated ', ingredient });
}
exports.createIngredient = createIngredient;
;
