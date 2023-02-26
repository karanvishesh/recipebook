import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(
    public recipeService: RecipeService,
    public route: ActivatedRoute
  ) {
    this.recipe = new Recipe(0, '', '', '', []);
    this.id = 0;
  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.recipe = this.recipeService.getRecipeById(this.id);
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.recipe = this.recipeService.getRecipeById(this.id);
    });
  }
  toShoppingList(ingredients: Ingredient[]) {
    this.recipeService.addIngredientsToShoppingList(ingredients);
  }
}
