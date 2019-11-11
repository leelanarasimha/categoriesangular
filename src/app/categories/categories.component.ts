import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from '../shared/models/Category.model';
import {CategoryService} from '../shared/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  categories: Category[];
  
  constructor(private categoryService: CategoryService) { 
 
  }

  ngOnInit() {
    
    this.categories = this.categoryService.getCategories();

    this.categoryService.categoryadded.subscribe(categories => {
      this.categories = categories;
    })
  }

  ngOnDestroy() {
    this.categoryService.categoryadded.unsubscribe();
  }

}
