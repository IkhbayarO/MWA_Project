import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { SalesListComponent } from './sales-list/sales-list.component';
@NgModule({
  declarations: [PurchaseListComponent, SalesListComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
