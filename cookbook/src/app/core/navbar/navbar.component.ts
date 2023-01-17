import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthorDialogComponent } from './author-dialog/author-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly authorName = 'Natalia Gurgul';
  readonly appName = 'Cookbook';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AuthorDialogComponent, {
      data: {
        name: this.authorName,
      },
    });
  }
}
