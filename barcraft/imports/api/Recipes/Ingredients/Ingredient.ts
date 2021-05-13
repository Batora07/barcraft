import { Horodatage } from "../../Common/Horodatage";
import { IngredientType } from "./IngredientType";

export class Ingredient {
    _id: string;
    name: string;
    type: IngredientType;  
    horodatage: Horodatage;
}