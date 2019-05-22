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
import { MyProductDetailsComponent } from './my-product-details/my-product-details.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/interceptors/auth-interceptor.service';



@NgModule({
  declarations: [
    LoginComponent, 
    SignupComponent, MyProductsComponent, MyAccountComponent,NotFound404Component, MyProductDetailsComponent, EditProductComponent
 
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
   
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass: AuthInterceptor,multi:true }]
})
export class UsersModule { }
