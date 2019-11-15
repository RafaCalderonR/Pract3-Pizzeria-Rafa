import { Router } from 'express'
const router = Router();

import { getPizzas, createPizza  } from '../controllers/pizza.controller'
import {getIngredients, createIngredient} from '../controllers/ingredient.controller';

router.route('/pizzas')
    .get(getPizzas)
    .post(createPizza);

router.route('/ingredient')
    .get(getIngredients)
    .post(createIngredient)




export default router;