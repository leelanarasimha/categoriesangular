import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddcategoryComponent } from './categories/addcategory/addcategory.component';
import { CategoryService } from './shared/services/category.service';
import { SigninComponent } from './signin/signin.component';
import { ReactivesigninComponent } from './reactivesignin/reactivesignin.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    AddcategoryComponent,
    SigninComponent,
    ReactivesigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
