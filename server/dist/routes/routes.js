"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const pizza_controller_1 = require("../controllers/pizza.controller");
const ingredient_controller_1 = require("../controllers/ingredient.controller");
router.route('/pizzas')
    .get(pizza_controller_1.getPizzas)
    .post(pizza_controller_1.createPizza);
router.route('/ingredient')
    .get(ingredient_controller_1.getIngredients)
    .post(ingredient_controller_1.createIngredient);
exports.default = router;
