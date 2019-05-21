import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {FormsModule} from "@angular/forms";
import {ProductByCatComponent} from "./product-by-cat/product-by-cat.component";
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
<<<<<<< HEAD
  declarations: [
    ProductListComponent, 
    ProductDetailsComponent, 
    AddProductComponent, 
    EditProductComponent,
   
  ],
=======
  declarations: [ProductListComponent, ProductDetailsComponent, AddProductComponent,
    EditProductComponent, ProductByCatComponent, CheckoutComponent],
>>>>>>> 742f160af521465935e8239ca323b55ce9cc8f02
  imports: [
    CommonModule,
    ProductsRoutingModule,
      FormsModule
  ]
})
export class ProductsModule { }
