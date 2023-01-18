import { Component } from '@angular/core';
import { Recipe } from 'src/app/types';
import { RECIPES } from './mocks';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent {
  recipes: Recipe[] = RECIPES;
}
