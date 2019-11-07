import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddcategoryComponent } from './categories/addcategory/addcategory.component';
import { CategoryService } from './shared/services/category.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    AddcategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
