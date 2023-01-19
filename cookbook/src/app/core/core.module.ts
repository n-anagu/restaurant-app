import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthorDialogComponent } from './navbar/author-dialog/author-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RecipesService } from './recipes.service';
import { HttpClientModule } from '@angular/common/http';
import { DeleteRecipeDialogComponent } from './recipes-list/delete-recipe-dialog/delete-recipe-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FilterRecipesFormComponent } from './recipes-list/filter-recipes-form/filter-recipes-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    NavbarComponent,
    AuthorDialogComponent,
    RecipesListComponent,
    DeleteRecipeDialogComponent,
    FilterRecipesFormComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [NavbarComponent, RecipesListComponent],
  providers: [RecipesService],
})
export class CoreModule {}
