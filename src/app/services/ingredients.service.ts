import { Ingredient } from "../shared/ingredient.model";
//import { EventEmitter } from '@angular/core';
import { Subject } from "../../../node_modules/rxjs";

export class IngredientsService {
ingredientsChange = new Subject<Ingredient[]>();
startedEditing = new Subject<number>();
    ingredients: Ingredient [] = [
      new Ingredient ('Tomatoes', 5),
      new Ingredient ('Apples', 3)
    ];

    getIngredients() {
      return this.ingredients.slice();
    }

    getIngredient(index: number){
      return this.ingredients[index];
    }

    updateIngredient(index: number, ingredient: Ingredient){
      this.ingredients[index] = ingredient;
      this.ingredientsChange.next(this.ingredients.slice());
    }

    addIngredient(ingredient: Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChange.next(this.ingredients.slice());
    }

    addIngredients(auxIngredients: Ingredient[]){
      for (const i of auxIngredients) {
        this.ingredients.push(i);
      }
      this.ingredientsChange.next(this.ingredients.slice());
    }
}
