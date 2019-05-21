import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AuthGuard } from './guards/auth.guard';
=======
import {ProductListComponent} from "./product-list/product-list.component";
>>>>>>> 742f160af521465935e8239ca323b55ce9cc8f02

const routes: Routes = [
  {path:'users',loadChildren:'./featuremodules/users/users.module#UsersModule'},
  {path:'products',loadChildren:'./featuremodules/products/products.module#ProductsModule'},
<<<<<<< HEAD
  {path:'orders',loadChildren:'./featuremodules/orders/orders.module#OrdersModule',canActivate:[AuthGuard]},
  {path:'',redirectTo:'home',pathMatch:'full'}
=======
  {path:'orders',loadChildren:'./featuremodules/orders/orders.module#OrdersModule'},
  {path:'',component:ProductListComponent}
>>>>>>> 742f160af521465935e8239ca323b55ce9cc8f02
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
