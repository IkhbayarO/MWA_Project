import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { CartRoutingModule } from './cart.routing-module';

import { CartComponent } from './component/cart.component';

import { CartService } from './service/cart.service';
//import { NotFound404Component } from '';


@NgModule({
  declarations: [
    CartComponent,
    //NotFound404Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    CartRoutingModule
   
  ],
  providers: [
    CartService
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
