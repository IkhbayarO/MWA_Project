import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  isAdded:boolean
  isLogged:boolean
  constructor(private http:HttpClient,private router:Router) { }

  createUser(serverUrl,user){
     
    this.http.post(serverUrl,{data:user}).subscribe(res=>{
    

      if(res.message=="success"){
        alert("Added Successfully")
        this.isAdded=true
        this.router.navigate(['users'])
      }
      else{
        this.isAdded=false
      }

    },err=>{
      this.isAdded=false
    })
return this.isAdded;

  }

  loginUser(serverUrl,user){
    alert('going to check')
    this.http.post(serverUrl,{data:user}).subscribe(res=>{
       
      if(res.message=='success'){
        console.log(res.data[0])
        // localStorage.setItem('user',JSON.stringify(res.data))
        this.isLogged=true
        this.router.navigate([''])
       }else{

        this.isLogged=false
       }
    },err=>{

      this.isLogged=false
    })
return this.loginUser
  }
}
