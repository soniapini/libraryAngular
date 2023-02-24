import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() addCategory: EventEmitter<Category> = new EventEmitter<Category>();
  @Output() selectCategory: EventEmitter<Category> = new EventEmitter<Category>();

  newCategory: string = '';

  constructor () {
  }

  ngOnInit(): void {
    console.log("category list component ", this.categories);
  }

  ngOnChanges() {
    console.log("category list component NgOnChanges", this.categories);
  }

  onCategoryClick(categoryIndex: number) {
    console.log("categoria cliccata: ", this.categories[categoryIndex]);
    this.selectCategory.emit(this.categories[categoryIndex]);
  }

  addCustomCategory() {
    console.log("aggiunta nuova categria ", this.newCategory);
    const customCategory: Category = {
      id: 1111,
      description: this.newCategory,
      type: CategoryType.CUSTOM
    };
    this.addCategory.emit(customCategory);
   
  }
}
