import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {ProductByCatComponent} from "./product-by-cat/product-by-cat.component";
import {CheckoutComponent} from "./checkout/checkout.component";

const routes: Routes = [
  { path:'',component:ProductListComponent},
      {path: ":id", component: ProductDetailsComponent},
      {path: "update/:id", component: EditProductComponent},
      {path: "add/new", component: AddProductComponent},
      {path: "cat/:name", component: ProductByCatComponent},
      {path: "buy/checkout", component: CheckoutComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
