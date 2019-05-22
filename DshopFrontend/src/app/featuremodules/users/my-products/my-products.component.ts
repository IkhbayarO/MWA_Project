import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import {TokenReaderService} from "../../../token-reader.service";


@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {
productList:any=[]
serverUrl = "http://localhost:3000/products/user/"

  constructor(public http:HttpClient,public userService:UserserviceService,public router:Router,public tokenReader:TokenReaderService) { }

  ngOnInit() {
    let user = this.tokenReader.getLoggedUserInfo()
    this.http.get(this.serverUrl+""+user.id).subscribe(res=>{
      console.log(res.data)
      this.productList = res.data
   })

  }


  goDetails(prod){
    localStorage.setItem('prodTochange',JSON.stringify(prod))
    this.router.navigate(['users','editProduct'])
  }

}
