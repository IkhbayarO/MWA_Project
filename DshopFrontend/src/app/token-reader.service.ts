import { Injectable, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenReaderService implements OnInit{
  user:any;
  constructor(public helper:JwtHelperService) { }

  ngOnInit(){
   
    
  }

  getLoggedUserInfo():any{
    const token = localStorage.getItem('token');
    
    if(token!==null){

    const decodedToken = this.helper.decodeToken(token)
    this.user = decodedToken.user

    }

   
    return this.user||null
  }

}
