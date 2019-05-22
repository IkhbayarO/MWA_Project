import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenReaderService } from 'src/app/token-reader.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  user:any
  constructor(public router:Router,public tokenService:TokenReaderService) { }

  ngOnInit() {

    this.user = this.tokenService.getLoggedUserInfo()
  }

  logout(){
    localStorage.removeItem('token')
 
    this.router.navigate([''])
   }

   gotMyAccount(){
    this.router.navigate(['users','myProducts'])
   }

}
