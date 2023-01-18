import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush, // TODO: check if we can use it here
})
export class RecipeComponent implements OnInit {
  recipeId: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.recipeId = params.get('id');
    });
  }
}
