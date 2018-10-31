import { Recipes } from "../recipes/recipes.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { IngredientsService } from "./ingredients.service";

@Injectable()//Permite injectar un servicio dentro de otro servicio 
export class RecipeService {
    //recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipes[] = [
        new Recipes(
            'A test recipe 1',
            'this a simple recipe',
            'https://www.cocinavital.mx/wp-content/uploads/2018/02/platillos_para_una_comida_de_cuaresma_portada.jpg',        
           [
                new Ingredient('aples' , 5),
                new Ingredient('Chease' , 5)
           ]
            ),
           new Recipes(
            'A test recipe 2',
            'this a simple recipe',
            'http://radiotexmex.fm/wp-content/uploads/2016/06/photoEscudo_TLAX_Gastronomia_Ac_gastronomia.jpg',
           [
            new Ingredient('bread' , 5)
           ]
            ),
           new Recipes(
            'A test recipe 3',
            'this a simple recipe',
            'https://gds.portal5g-media.com/contentFiles/image/2016/11/FEA/principal/53075_w840h0_1478286614appetite.jpg',
           [
            new Ingredient('salt' , 5)
           ]),
           new Recipes(
            'A test recipe 4',
            'this a simple recipe',
            'https://i.blogs.es/36938e/istock-840527124/450_1000.jpg',
            [
                new Ingredient('aples' , 5)
            ]
            ),
            ];
    constructor(private ingredientsService: IngredientsService){

    }
      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index: number){//Recibir la receta y su posicion
          return this.recipes[index];
      }
      
      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.ingredientsService.addIngredients(ingredients);
      }
}
