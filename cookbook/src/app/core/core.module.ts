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

@NgModule({
  declarations: [NavbarComponent, AuthorDialogComponent, RecipesListComponent, DeleteRecipeDialogComponent],
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
  ],
  exports: [NavbarComponent, RecipesListComponent],
  providers: [RecipesService],
})
export class CoreModule {}
