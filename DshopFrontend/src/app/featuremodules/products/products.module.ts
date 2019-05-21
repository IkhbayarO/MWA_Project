import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';


@NgModule({
  declarations: [
    ProductListComponent, 
    ProductDetailsComponent, 
    AddProductComponent, 
    EditProductComponent,
   
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
