import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {AddProductComponent} from "./add-product/add-product.component";
import { AuthGuard } from 'src/app/guards/auth.guard';
import {ProductByCatComponent} from "./product-by-cat/product-by-cat.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import { NotFound404Component } from './not-found404/not-found404.component';

const routes: Routes = [
     
      {path: "get/:id", component: ProductDetailsComponent},
      {path: "update/:id", component: EditProductComponent,canActivate:[AuthGuard]},
      {path: "add/new", component: AddProductComponent,canActivate:[AuthGuard]},
      {path: "cat/:name", component: ProductByCatComponent},
      {path: "buy/checkout", component: CheckoutComponent,canActivate:[AuthGuard]},
      { path:'',component:ProductListComponent},
      {path:'**',component:NotFound404Component}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
