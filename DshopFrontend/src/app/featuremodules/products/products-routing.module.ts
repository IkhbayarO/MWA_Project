import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
// import {ProductListComponent} from "./product-list/product-list.component";
// import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {AddProductComponent} from "./add-product/add-product.component";

const routes: Routes = [
  { path:'',component:ProductListComponent},
      {path: ":id", component: ProductDetailsComponent},
      {path: "update/:id", component: EditProductComponent},
      {path: "add/:id", component: AddProductComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
