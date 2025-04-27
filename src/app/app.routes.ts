import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductComponent } from './Components/product/product.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ErrorComponent } from './Components/error/error.component';
import { ProductParentComponent } from './Components/product-parent/product-parent.component';
import { featureGuard } from './feature.guard';

export const routes: Routes = [
  {path:"",redirectTo:"home" , pathMatch:"full" , title:"Home"},
  {path:"home",component:HomeComponent , title:"Home", canActivate: [featureGuard]},
  {path:"about",component:AboutComponent , title:"About", canActivate: [featureGuard]},
  {path:"product",component:ProductParentComponent , title:"Product", canActivate: [featureGuard]},
  {path:"login",component:LoginComponent , title:"Login"},
  {path:"register",component:RegisterComponent , title:"Register"},
  {path:"**",component:ErrorComponent , title:"Error"},
];
