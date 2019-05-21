import { Component, OnInit, OnChanges } from '@angular/core';
import {JwtHelperService } from '@auth0/angular-jwt'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../css/style.css','../css/responsive.css','../css/owl.css']
})
export class AppComponent implements OnInit,OnChanges{
  title = 'Dshop';
  user:any;
  constructor(public helper:JwtHelperService,public router:Router){}

  ngOnInit(){
    const token = localStorage.getItem('token');
    const decodedToken = this.helper.decodeToken(token)
    this.user = decodedToken.user
    console.log(this.user)
  }
  ngOnChanges(){
    console.log("Changes happened")
  }

  

 


}
