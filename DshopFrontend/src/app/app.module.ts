import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { PaymentComponent } from './payment/payment.component';
<<<<<<< HEAD
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
=======
import {HttpClientModule} from '@angular/common/http';
>>>>>>> eedcd5f6dad0805f897a76f46d2d32d379ab8a21

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
=======
<<<<<<< HEAD
    FormsModule,
    AppRoutingModule,
    CommonModule
=======
    AppRoutingModule,
      HttpClientModule
>>>>>>> a25401ca0de1bd7a2f134d817ffcedd0c93efce7
>>>>>>> eedcd5f6dad0805f897a76f46d2d32d379ab8a21
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
