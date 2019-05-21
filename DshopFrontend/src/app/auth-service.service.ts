import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }


  isLogged():boolean{
    if(localStorage.getItem('token')!==null){
      return true;
    }else
    return false;
    
  }
}
