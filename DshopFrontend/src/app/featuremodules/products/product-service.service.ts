import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  //send ajax request request
  //create objet of product
  //import your product class

  getProductList(){
    let products:Array<Object>;

    let data: Array<Object>;
    // data= JSON.parse(localStorage.getItem("products"));

    
    // data=JSON.parse("http://localhost:3000/products")

    // for(let  prod of data){
    //   let product = new Product(prod.name, prod.category, prod.price, prod.isAvailable,
    //       prod.image, prod.description);
    //   product.setId((prod._id));

    //   products.push(product)
    // }


    return products;
  }
}
