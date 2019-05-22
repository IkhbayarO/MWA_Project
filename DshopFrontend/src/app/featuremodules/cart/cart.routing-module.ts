import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from "./component/cart.component";
//import { NotFound404Component } from './not-found404/not-found404.component';

const routes: Routes = [
  {path:'', component: CartComponent},
  {path:'',redirectTo:'',pathMatch:'full'}
  //{path:'**',component:NotFound404Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
