import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { AddcategoryComponent } from './categories/addcategory/addcategory.component';
import { SigninComponent } from './signin/signin.component';
import { ReactivesigninComponent } from './reactivesignin/reactivesignin.component';
import { CategorydetailsComponent } from './categories/categorydetails/categorydetails.component';
import { CustomobservableComponent } from './customobservable/customobservable.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';


const appRoutes: Routes = [
    {path: '', component: CategoriesComponent},
    {path: 'reactive', component: ReactiveformsComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'observable', component: CustomobservableComponent},
  
  
    {path: 'categories', component: CategoriesComponent, children: [
      {path: 'add', component: AddcategoryComponent},
      {path: ':id', component: CategorydetailsComponent}
      
    ]}
    
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}


