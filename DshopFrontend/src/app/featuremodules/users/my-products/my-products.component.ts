import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {
productList:any=[]
serverUrl = "http://localhost:3000/products/user/5ce19f7731ad210ee85509a6"

  constructor(public http:HttpClient,public userService:UserserviceService,public router:Router) { }

  ngOnInit() {

    this.http.get(this.serverUrl).subscribe(res=>{
      console.log(res.data)
      this.productList = res.data
   })

  }


  goDetails(prod){
    localStorage.setItem('prodTochange',JSON.stringify(prod))
    this.router.navigate(['users','editProduct'])
  }

}
