import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {AddProductComponent} from "./add-product/add-product.component";
import { AuthGuard } from 'src/app/guards/auth.guard';
import {ProductByCatComponent} from "./product-by-cat/product-by-cat.component";
import {CheckoutComponent} from "./checkout/checkout.component";

const routes: Routes = [
      { path:'',component:ProductListComponent},
      {path: ":id", component: ProductDetailsComponent},
      {path: "update/:id", component: EditProductComponent,canActivate:[AuthGuard]},
      {path: "add/new", component: AddProductComponent,canActivate:[AuthGuard]},
      {path: "cat/:name", component: ProductByCatComponent},
      {path: "buy/checkout", component: CheckoutComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
