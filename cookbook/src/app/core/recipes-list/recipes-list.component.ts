import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { combineLatest, map, Observable, of } from 'rxjs';
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

  filteredRecipes$: Observable<Recipe[]> = of([]);
  private recipes$: Observable<Recipe[]> = of([]);
  private filter$: Observable<string> = of('');

  constructor(
    private recipesService: RecipesService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.recipes$ = this.recipesService.getRecipesList();
    this.subscribeToRecipes();
  }

  onFilterRecipesList(filteredRecipeName: string) {
    this.filter$ = of(filteredRecipeName);
    this.filteredRecipes$ = combineLatest(this.recipes$, this.filter$).pipe(
      map(([recipes, filterString]) =>
        recipes.filter(
          (recipe) =>
            recipe.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1
        )
      )
    );
  }

  openDeleteRecipeDialog(recipeId: string) {
    const dialogRef = this.dialog.open(DeleteRecipeDialogComponent);

    dialogRef.afterClosed().subscribe((shouldDelete: boolean) => {
      if (shouldDelete) {
        this.recipesService.deleteRecipe(recipeId).subscribe({
          next: () => {
            this._snackBar.open('Recipe has been deleted!', undefined, {
              duration: 3000,
            });

            this.subscribeToRecipes();
          },
          error: () => {
            this._snackBar.open('Cannot delete recipe.', undefined, {
              duration: 3000,
            });
          },
        });
      }
    });
  }

  private subscribeToRecipes() {
    this.recipes$.subscribe({
      next: (recipes) => {
        this.filteredRecipes$ = of(recipes);
      },
    });
  }
}
