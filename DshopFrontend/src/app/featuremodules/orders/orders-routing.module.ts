import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseListComponent } from "./purchase-list/components/purchase-list.component";
import { SalesListComponent } from './sales-list/components/sales-list.component';
import { NotFound404Component } from './not-found404/not-found404.component';

const routes: Routes = [
  {path:'sales', component: SalesListComponent},
  {path:'purchases', component: PurchaseListComponent},
  {path:'',redirectTo:'purchases',pathMatch:'full'},
  {path:'**',component:NotFound404Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
