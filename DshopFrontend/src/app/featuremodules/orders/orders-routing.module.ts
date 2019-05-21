import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseListComponent } from "./purchase-list/components/purchase-list.component";
import { SalesListComponent } from './sales-list/components/sales-list.component';

const routes: Routes = [
  {path:'sales', component: SalesListComponent},
  {path:'purchases', component: PurchaseListComponent},
  {path:'',redirectTo:'purchases',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
