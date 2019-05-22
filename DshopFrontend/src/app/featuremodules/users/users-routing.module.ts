import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import { MyProductsComponent } from './my-products/my-products.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { NotFound404Component } from './not-found404/not-found404.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'myProducts',component:MyProductsComponent,canActivate:[AuthGuard]},
    {path:'editProduct',component:EditProductComponent,canActivate:[AuthGuard]},
    {path:'myAccount',component:MyAccountComponent,canActivate:[AuthGuard]},
    {path:'',component:LoginComponent},
    {path:'**',component:NotFound404Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
