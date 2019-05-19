import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseListComponent } from "./purchase-list/components/purchase-list.component";
import { SalesListComponent } from './sales-list/components/sales-list.component';

const routes: Routes = [
  {path:'sales-list', component: SalesListComponent},
  {path:'purchase-list', component: PurchaseListComponent}
  //{path:'',component:PurchaseListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
