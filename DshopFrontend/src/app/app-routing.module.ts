import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import {ProductListComponent} from "./product-list/product-list.component";

const routes: Routes = [
  {path:'users',loadChildren:'./featuremodules/users/users.module#UsersModule'},
  {path:'products',loadChildren:'./featuremodules/products/products.module#ProductsModule'},
  {path:'orders',loadChildren:'./featuremodules/orders/orders.module#OrdersModule',canActivate:[AuthGuard]},
  {path:'',component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
