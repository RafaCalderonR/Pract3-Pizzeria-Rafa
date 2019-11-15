import { Request, Response } from 'express'


import Pizza, { IPizza } from '../models/pizza.model';

export async function getPizzas(req: Request, res: Response): Promise<Response> {
    const character = await Pizza.find();
    return res.json(character);
};

export async function createPizza(req: Request, res: Response): Promise<Response> {
   
    const { name,
        ingredients,
        basePrice,
        image, } = req.body;

    const pizza:IPizza = new Pizza({
        name,
        ingredients,
        basePrice,
        image,
    })
    await pizza.save();
    return res.json({message: 'Successfully updated ', pizza})
};