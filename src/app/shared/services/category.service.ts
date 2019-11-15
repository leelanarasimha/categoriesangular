import {Category} from '../models/Category.model';
import { Output, EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

    constructor(private http: HttpClient) {}

    categories: Category[] = [
        {id: '1', name: 'category1'},
        {id: '2', name: 'category1'},
        new Category('3', 'category2')
      ];

      @Output() activateButtonPressed = new Subject<boolean>();
      @Output() categoryadded = new EventEmitter<Category[]>();

      getCategories() {
          return [...this.categories];
        //   this.http.get(`https://angulardemo-25a16.firebaseio.com/categories.json`)
        //   .subscribe(categories => {
        //       console.log(categories);
        //   })
      }

      addCategory(id: string, name: string) {
          this.http.post(`https://angulardemo-25a16.firebaseio.com/categories.json`,
           {id:id, name: name}).
           subscribe(data => {
              console.log(data);
          });
          
      }

      getCategoryById(id): Category {
         let category =  this.categories.find(cat => {
              return cat.id === id
          });

          return category;

      }
}