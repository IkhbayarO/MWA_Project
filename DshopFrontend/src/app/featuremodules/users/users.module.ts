import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent, 
    SignupComponent,
 
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
