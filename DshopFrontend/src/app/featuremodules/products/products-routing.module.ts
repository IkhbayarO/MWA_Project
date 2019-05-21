import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {AddProductComponent} from "./add-product/add-product.component";
<<<<<<< HEAD
import { AuthGuard } from 'src/app/guards/auth.guard';
=======
import {ProductByCatComponent} from "./product-by-cat/product-by-cat.component";
import {CheckoutComponent} from "./checkout/checkout.component";
>>>>>>> 742f160af521465935e8239ca323b55ce9cc8f02

const routes: Routes = [
  { path:'',component:ProductListComponent},
      {path: ":id", component: ProductDetailsComponent},
<<<<<<< HEAD
      {path: "update/:id", component: EditProductComponent,canActivate:[AuthGuard]},
      {path: "add/:id", component: AddProductComponent,canActivate:[AuthGuard]}
=======
      {path: "update/:id", component: EditProductComponent},
      {path: "add/new", component: AddProductComponent},
      {path: "cat/:name", component: ProductByCatComponent},
      {path: "buy/checkout", component: CheckoutComponent}
>>>>>>> 742f160af521465935e8239ca323b55ce9cc8f02
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
