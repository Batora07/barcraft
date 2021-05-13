import { RecipeType } from './RecipeType';
import {Horodatage} from '../Common/Horodatage';
import { RecipeIngredient } from './RecipeIngredient';

export class Recipe {
    _id: string;
    name: string;
    type: RecipeType;  
    horodatage: Horodatage;
    ingredients?: RecipeIngredient[];
}