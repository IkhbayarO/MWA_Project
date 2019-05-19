import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from "../product-service.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Array<Object>;
  constructor(private  productService:ProductServiceService) {

  }

  ngOnInit() {
  }

  getProductList(){
    this.productList = this.productService.getProductList();
  }



}
