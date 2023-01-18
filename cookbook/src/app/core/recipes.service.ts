import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../types';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private readonly apiUrl =
    'https://crudcrud.com/api/4a3252283c7e40e398278d206238fb15';
  private readonly recipesResource = '/recipes';

  constructor(private http: HttpClient) {}

  getRecipesList() {
    return this.http.get<Recipe[]>(`${this.apiUrl}${this.recipesResource}`);
  }

  getRecipe(id: string) {
    return this.http.get<Recipe>(`${this.apiUrl}${this.recipesResource}/${id}`);
  }
}
