import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'users',loadChildren:'./featuremodules/users/users.module#UsersModule'},
  {path:'products',loadChildren:'./featuremodules/products/products.module#ProductsModule'},
  {path:'orders',loadChildren:'./featuremodules/orders/orders.module#OrdersModule',canActivate:[AuthGuard]},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
