import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddcategoryComponent } from './categories/addcategory/addcategory.component';
import { CategoryService } from './shared/services/category.service';
import { SigninComponent } from './signin/signin.component';
import { ReactivesigninComponent } from './reactivesignin/reactivesignin.component';
import { CategorydetailsComponent } from './categories/categorydetails/categorydetails.component';
import { CustomobservableComponent } from './customobservable/customobservable.component';




@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    AddcategoryComponent,
    SigninComponent,
    ReactivesigninComponent,
    CategorydetailsComponent,
    CustomobservableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
