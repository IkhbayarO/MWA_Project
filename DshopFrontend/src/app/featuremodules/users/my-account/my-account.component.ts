import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('token')
 
    this.router.navigate([''])
   }

   gotMyAccount(){
    this.router.navigate(['users','myAccount'])
   }

}
