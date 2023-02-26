import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService {
  constructor(public slService: ShoppingListService) {}
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Chicken Biryani',
      'MouthWatering Recipes for you',
      'https://t4.ftcdn.net/jpg/04/18/22/51/240_F_418225186_OCtaNADfMMtBWBwTTOTJYcyjuRMQIqjW.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Rice', 20),
        new Ingredient('Onion', 2),
        new Ingredient('Tomato', 2),
        new Ingredient('Yogurt', 1),
      ]
    ),
    new Recipe(
      2,
      'Vada Pav',
      'MouthWatering Recipes for you',
      'https://t3.ftcdn.net/jpg/02/65/32/14/240_F_265321464_aOkEw0Znzl9GXdBnh98bnDVU2xfIRqer.jpg',
      [
        new Ingredient('Potato', 2),
        new Ingredient('Bread', 2),
        new Ingredient('Onion', 1),
        new Ingredient('Tomato', 1),
      ]
    ),
  ];

  getRecipe() {
    return this.recipes.slice();
  }
  getRecipeById(index: number) {
    return this.recipes[index - 1];
  }
  selectedRecipe = new EventEmitter<Recipe>();
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
