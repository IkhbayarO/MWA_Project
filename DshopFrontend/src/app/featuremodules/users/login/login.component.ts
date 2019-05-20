import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  // templateUrl: './login.component.html',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:any ={}
serverUrl:string = "http://localhost:3000/users/login"
    constructor( private service:UserserviceService) { }

  ngOnInit() {
  }

  onSubmit(f){
    this.service.loginUser(this.serverUrl,f.value)
    console.log(f.value)
  }

}
