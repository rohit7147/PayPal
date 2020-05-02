import { restaurants } from '../utility/inputcsv';
import { csvInput } from '../utility/csvInterface';

export class UniqueCusines {
    restaurant: csvInput;
    cuisineArray: string[] = [];
    constructor() {
        for (let i = 0; i < restaurants.length; i++) {
            let cuisines = restaurants[i].cuisines;
            let splitCuisine = cuisines.split(',');
            for (let j = 0; j < splitCuisine.length; j++) {
                if(this.cuisineArray.includes(splitCuisine[j]) == false && splitCuisine[j] != '') {
                    this.cuisineArray.push(splitCuisine[j]);
                }
            }
        }
    }
}