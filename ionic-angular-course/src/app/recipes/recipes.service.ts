import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://therecipecritic.com/wp-content/uploads/2020/10/pork-schnitzel-recipe-3.jpg',
      ingredients:['French Fries', ' Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-3-1200.jpg',
      ingredients:['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }
  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe =>  recipe.id === recipeId
      )
    };
  }
  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe =>
       recipe.id !== recipeId);
    }
  }

