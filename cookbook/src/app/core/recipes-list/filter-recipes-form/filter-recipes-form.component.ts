import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-recipes-form',
  templateUrl: './filter-recipes-form.component.html',
  styleUrls: ['./filter-recipes-form.component.scss'],
})
export class FilterRecipesFormComponent implements OnInit {
  @Output() filter: EventEmitter<string> = new EventEmitter();

  recipeNameControl = new FormControl('');

  filterRecipeForm = this.formBuilder.group({
    recipeName: this.recipeNameControl,
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.filterRecipeForm.controls.recipeName.valueChanges.subscribe({
      next: (name) => {
        if (name) {
          this.filter.emit(name);
        } else {
          this.filter.emit('');
        }
      },
    });
  }
}
