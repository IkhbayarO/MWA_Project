import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductByCatComponent} from "./product-by-cat/product-by-cat.component";
import { CheckoutComponent } from './checkout/checkout.component';
import { NotFound404Component } from './not-found404/not-found404.component';


@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent, AddProductComponent,
    EditProductComponent, ProductByCatComponent, CheckoutComponent,NotFound404Component],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ProductsModule { }
