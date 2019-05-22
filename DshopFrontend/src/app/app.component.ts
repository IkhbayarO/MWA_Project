import { Component, OnInit, OnChanges } from '@angular/core';
import {JwtHelperService } from '@auth0/angular-jwt'
import { Router } from '@angular/router';
import { TokenReaderService } from './token-reader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../css/style.css','../css/responsive.css','../css/owl.css']
})
export class AppComponent implements OnInit,OnChanges{
  title = 'Dshop';
  user:any;
  constructor(public tokenService:TokenReaderService,public router:Router){}

  ngOnInit(){
    this.user = this.tokenService.getLoggedUserInfo()
    console.log(localStorage.getItem("token"))
  }
  ngOnChanges(){
    
    console.log("Changes happened")
  }

  

  


}
