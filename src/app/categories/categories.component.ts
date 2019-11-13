import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from '../shared/models/Category.model';
import {CategoryService} from '../shared/services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  categories: Category[];
  categoriesSubscription: Subscription
  
  constructor(private categoryService: CategoryService) { 
 
  }

  ngOnInit() {
    
    this.categories = this.categoryService.getCategories();

    this.categoriesSubscription = this.categoryService.categoryadded.subscribe(categories => {
      this.categories = categories;
    })
  }

  ngOnDestroy() {
    this.categoriesSubscription.unsubscribe();
  }

}
