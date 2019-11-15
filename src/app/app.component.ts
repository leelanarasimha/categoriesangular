import { Component } from '@angular/core';
import { CategoryService } from './shared/services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'categories';
  isActivated = false;

  buttonsubscription: Subscription;


  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.activateButtonPressed.subscribe(data => {
      console.log("activated subject");
      this.isActivated = true;
    })
  }

  ngOnDestroy() {
    this.buttonsubscription.unsubscribe();
  }
}
