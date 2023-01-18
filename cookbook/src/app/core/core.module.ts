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

@NgModule({
  declarations: [NavbarComponent, AuthorDialogComponent, RecipesListComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
  ],
  exports: [NavbarComponent, RecipesListComponent],
})
export class CoreModule {}
