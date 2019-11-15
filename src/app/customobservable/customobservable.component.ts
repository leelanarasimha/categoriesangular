import { Component, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import {map, filter} from 'rxjs/operators';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-customobservable',
  templateUrl: './customobservable.component.html',
  styleUrls: ['./customobservable.component.css']
})
export class CustomobservableComponent implements OnInit {

  intervalSubscribe: Subscription;
  
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {

    const customobservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);

        // if (count > 3) {
        //   observer.error(new Error('count is greater than 3'));
        // }

        // if (count > 2) {
        // observer.complete();
        // }
        count++;
      }, 1000);
    });

    this.intervalSubscribe = customobservable.pipe(filter(data => {return data > 3}),map(data => {
      return 'count is '+data;
    })).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error.message);
    }, () => {
      console.log('complete');
    });



    
  }

  onActivateClicked(event) {
    event.preventDefault();
    console.log("activate button");
    this.categoryService.activateButtonPressed.next(true);
    
  }

  ngOnDestroy() {
    this.intervalSubscribe.unsubscribe();
  }

}
