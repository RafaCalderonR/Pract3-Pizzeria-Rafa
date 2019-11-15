import { Request, Response } from 'express'


import Ingredient, { IIngredient } from '../models/ingredent.model';

export async function getIngredients(req: Request, res: Response): Promise<Response> {
    const character = await Ingredient.find();
    return res.json(character);
};

export async function createIngredient(req: Request, res: Response): Promise<Response> {
   
    const { name,
        ingredients,
        basePrice,
        image, } = req.body;

    const ingredient:IIngredient = new Ingredient({
        name,
        ingredients,
        basePrice,
        image,
    })
    await ingredient.save();
    return res.json({message: 'Successfully updated ', ingredient})
};