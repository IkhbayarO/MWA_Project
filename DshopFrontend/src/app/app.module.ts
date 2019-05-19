import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { PaymentComponent } from './payment/payment.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    FormsModule,
    AppRoutingModule,
    CommonModule
=======
    AppRoutingModule,
      HttpClientModule
>>>>>>> a25401ca0de1bd7a2f134d817ffcedd0c93efce7
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
