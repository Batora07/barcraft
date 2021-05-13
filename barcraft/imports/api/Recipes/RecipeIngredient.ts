import { Ingredient } from "./Ingredients/Ingredient";

export class RecipeIngredient {    
    ingredient: Ingredient;
    name: string;
    quantity: number;
    price?: number;
    /**
     * used for cereals & sugar types elements
     */
    color?: string;
    /**
     * Is this ingredient produced from other ingredients ?
     */
    composedOf?: RecipeIngredient[];
    /**
     * Does this ingredient relates to other ingredients ?
     */
    relatesTo?: RecipeIngredient[];
}