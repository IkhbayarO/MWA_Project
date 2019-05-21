import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from "../product-service.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  product:any={}
  address:any ={}
  payment:any ={}

  constructor(private productService: ProductServiceService) {

  }

  ngOnInit() {

   this.product  = JSON.parse(localStorage.getItem('tempProd'))
    console.log(this.product.name)

  }

  onAdd(p){



  }
}
