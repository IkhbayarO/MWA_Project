import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../featuremodules/products/product-service.service';
import {Product} from '../models/Product';
import {Router} from "@angular/router";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  tempproductList: Product[]=[];
  productList: Product[]=[];
  product: Product;


  constructor(private  productService: ProductServiceService, private router:Router) {}
  ngOnInit() {
    this.getAllProducts();
  }

  goDetails(e){
    this.router.navigate(['products','get', e])
  }

  getAllProducts() {
  this.productService.getProductList().subscribe(res=>{


    res.forEach(p=>{
      let prod=new Product(p._id, p.name, p.category, p.price, p.isAvailable, p.image, p.description);
      this.productList.push(prod);

    });



  },err=>{console.log(err)})

  }
}
