import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddcategoryComponent } from './categories/addcategory/addcategory.component';
import { CategoryService } from './shared/services/category.service';
import { SigninComponent } from './signin/signin.component';
import { ReactivesigninComponent } from './reactivesignin/reactivesignin.component';
import { CategorydetailsComponent } from './categories/categorydetails/categorydetails.component';


const appRoutes: Routes = [
  {path: '', component: CategoriesComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories/:id', component: CategorydetailsComponent},
  
  {path: 'reactive', component: ReactivesigninComponent},
  {path: 'signin', component: SigninComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    AddcategoryComponent,
    SigninComponent,
    ReactivesigninComponent,
    CategorydetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
