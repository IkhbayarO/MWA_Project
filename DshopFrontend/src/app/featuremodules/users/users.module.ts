import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { MyProductsComponent } from './my-products/my-products.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { NotFound404Component } from './not-found404/not-found404.component';



@NgModule({
  declarations: [
    LoginComponent, 
    SignupComponent, MyProductsComponent, MyAccountComponent,NotFound404Component
 
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
   
  ]
})
export class UsersModule { }
