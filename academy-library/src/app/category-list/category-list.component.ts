import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { Category } from '../models/category';
import { CategoryType } from '../models/category-type';

@Component({
  selector: 'ea-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  @Input() title: string = '';
  @Input() categories: Array<Category> = [];
  @Input() allowCreate: boolean = false;
  @Input() selectFirstCategory: boolean = false;

  @Output() addCategory: EventEmitter<Category> = new EventEmitter<Category>();
  @Output() selectCategory: EventEmitter<Category> = new EventEmitter<Category>();

  newCategory: string = '';
  selectedCategoryIndex: number | undefined;

  constructor() {

  }

  ngOnInit(): void {
    console.log("category list component ", this.categories);

  }

  ngOnChanges(changes: SimpleChange) {
    console.log("category list component NgOnChanges", this.categories);
    if (this.categories && this.categories.length > 0 && this.selectFirstCategory) {
      this.selectedCategoryIndex = 0;
      this.selectCategory.emit(this.categories[this.selectedCategoryIndex]);
    }
  }

  onCategoryClick(categoryIndex: number) {
    console.log("categoria cliccata: ", this.categories[categoryIndex]);
    this.selectedCategoryIndex = categoryIndex;
    this.selectCategory.emit(this.categories[this.selectedCategoryIndex]);
  }

  addCustomCategory() {
    console.log("aggiunta nuova categria ", this.newCategory);

    let categoryPresent = this.categories.find((category) => category.description === this.newCategory)

    if (!categoryPresent) {
      const customCategory: Category = {
        description: this.newCategory,
        type: CategoryType.CUSTOM
      };
      this.addCategory.emit(customCategory);
    } else {
      alert("Categoria già presente");
    }
  }
}
