import { DateTime } from "luxon";
import { Ingredient } from "./Ingredient";

export class Hop extends Ingredient {

    brewType?: string;

    IBU? : number;

    time: DateTime;

    additionTime?: string;

    alphaPercentage: number;
}