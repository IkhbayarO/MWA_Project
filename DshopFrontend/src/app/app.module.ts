import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { PaymentComponent } from './payment/payment.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginManagerDirective } from './login-manager.directive';
import { JwtModule } from '@auth0/angular-jwt';
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import {AuthInterceptor} from './interceptors/auth-interceptor.service'

export function tokenGetter() {

  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    PaymentComponent,
    LoginManagerDirective,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        skipWhenExpired: true

      }
    })

  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass: AuthInterceptor,multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
