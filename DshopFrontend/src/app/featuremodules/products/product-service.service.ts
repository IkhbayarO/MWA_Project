import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(public http: HttpClient) { }

  //send ajax request request
  //create objet of product
  //import your product class

  getProductList() {
    return this.http.get('http://localhost:3000/products');
  }

  getProductDetail(key: String){
    return this.http.get("http://localhost:3000/products/"+key);
  }

}
