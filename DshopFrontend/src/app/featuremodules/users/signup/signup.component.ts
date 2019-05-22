import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';

import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  // template:"<div>SIgnup</div>",
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    
  user:any ={}
  temp:any ={}
  newUser:object
  serveUrl:string = 'http://localhost:3000/users/signup'
  resp:object ={}
  
  
  constructor(private service:UserserviceService,public router:Router) { }
isAdded:boolean
  ngOnInit() {
  }

  onSubmit(form) {
    
   this.temp = form.value;

   this.newUser = new User(this.temp.firstname,this.temp.lastname,this.temp.username,this.temp.email,this.temp.phone,this.temp.password)
   this.isAdded = this.service.createUser(this.serveUrl, this.newUser)

   if(this.isAdded){
     alert("Good Good!")
   }

  }

    goLogin(){
    this.router.navigate(['users'])
    }
}
