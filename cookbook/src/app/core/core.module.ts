import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthorDialogComponent } from './navbar/author-dialog/author-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [NavbarComponent, AuthorDialogComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatToolbarModule],
  exports: [NavbarComponent],
})
export class CoreModule {}
