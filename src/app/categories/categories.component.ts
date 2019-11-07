import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/Category.model';
import {CategoryService} from '../shared/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  
  constructor(private categoryService: CategoryService) { 
 
  }

  ngOnInit() {
    
    this.categories = this.categoryService.getCategories();

    this.categoryService.categoryadded.subscribe(categories => {
      this.categories = categories;
    })
  }

}
