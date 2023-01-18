import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Recipe } from 'src/app/types';
import { RecipesService } from '../recipes.service';
import { DeleteRecipeDialogComponent } from './delete-recipe-dialog/delete-recipe-dialog.component';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(
    private recipesService: RecipesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  openDeleteRecipeDialog(recipeId: string) {
    const dialogRef = this.dialog.open(DeleteRecipeDialogComponent);

    dialogRef.afterClosed().subscribe((shouldDelete: boolean) => {
      if (shouldDelete) {
        this.recipesService
          .deleteRecipe(recipeId)
          .subscribe({ next: () => this.getRecipes() });
      }
    });
  }

  getRecipes() {
    this.recipesService.getRecipesList().subscribe({
      next: (recipes) => {
        this.recipes = recipes;
      },
    });
  }
}
