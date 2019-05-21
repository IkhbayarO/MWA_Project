import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { OrdersRoutingModule } from './orders-routing.module';

import { PurchaseListComponent } from './purchase-list/components/purchase-list.component';
import { SalesListComponent } from './sales-list/components/sales-list.component';

import { OrdersService } from './services/orders.service';
import { NotFound404Component } from './not-found404/not-found404.component';


@NgModule({
  declarations: [
    SalesListComponent,
    PurchaseListComponent,NotFound404Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrdersRoutingModule
   
  ],
  providers: [
    OrdersService
  ],
  exports: [
    SalesListComponent,
    PurchaseListComponent
  ]
})
export class OrdersModule { }
