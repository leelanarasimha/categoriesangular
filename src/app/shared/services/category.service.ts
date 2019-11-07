import {Category} from '../models/Category.model';
import { Output, EventEmitter } from '@angular/core';

export class CategoryService {
    categories: Category[] = [
        {id: '1', name: 'category1'},
        {id: '1', name: 'category1'},
        new Category('1', 'category2')
      ];

      @Output() categoryadded = new EventEmitter<Category[]>();

      getCategories() {
          return [...this.categories];
      }

      addCategory(id: string, name: string) {
          this.categories.push({id: id, name: name});
          this.categoryadded.emit(this.getCategories());
      }
}