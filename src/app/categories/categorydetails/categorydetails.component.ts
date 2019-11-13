import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/shared/models/Category.model';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.css']
})
export class CategorydetailsComponent implements OnInit {

  category: Category;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.category = this.categoryService.getCategoryById(params['id']);
    })
    
    

    console.log(this.category);
  }

}
