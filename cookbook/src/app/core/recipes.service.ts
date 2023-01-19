import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../types';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private readonly apiUrl =
    'https://crudcrud.com/api/5202c6778f2148a9a28ccc22c19d2f9c';
  private readonly recipesResource = '/recipes';

  constructor(private http: HttpClient) {}

  getRecipesList() {
    return this.http.get<Recipe[]>(`${this.apiUrl}${this.recipesResource}`);
  }

  getRecipe(id: string) {
    return this.http.get<Recipe>(`${this.apiUrl}${this.recipesResource}/${id}`);
  }

  deleteRecipe(id: string) {
    return this.http.delete(`${this.apiUrl}${this.recipesResource}/${id}`);
  }
}
