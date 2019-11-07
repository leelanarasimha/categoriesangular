import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  name: string;
  id: string;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  onAddCategory(event: Event) {
    event.preventDefault();
    this.categoryService.addCategory(this.id, this.name);
  }

}
