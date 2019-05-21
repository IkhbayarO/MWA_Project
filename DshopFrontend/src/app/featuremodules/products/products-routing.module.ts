import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
// import {ProductListComponent} from "./product-list/product-list.component";
// import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {AddProductComponent} from "./add-product/add-product.component";
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path:'',component:ProductListComponent},
      {path: ":id", component: ProductDetailsComponent},
      {path: "update/:id", component: EditProductComponent,canActivate:[AuthGuard]},
      {path: "add/:id", component: AddProductComponent,canActivate:[AuthGuard]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
