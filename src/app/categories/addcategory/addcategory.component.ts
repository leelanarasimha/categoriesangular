import { Component, OnInit, OnChanges } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  name: string;
  id: string;

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
  }

  onAddCategory(event: Event) {
    event.preventDefault();
    this.categoryService.addCategory(this.id, this.name);
    //redirect to /categories
    this.router.navigate(['/categories']);

  }

}
