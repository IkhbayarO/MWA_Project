import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {Product} from "../../models/Product";



@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
 
  isAdded:boolean;
  constructor(public http: HttpClient, private router: Router) { }

  emitter=new EventEmitter<any>();

  emitValue(value: any){
    this.emitter.emit(value);
  }

  //send ajax request request
  //create objet of product
  //import your product class

  updateProduct(serverUrl: string, value: any) {
   
    this.http.put(serverUrl,{
      data:{
        name:value.name,
        category:value.category,
        price:value.price,
        description:value.description,
        isAvailable:value.isAvailable
      }
    }).subscribe((res)=>{
      if(res.message=="success"){
        this.router.navigate(['users','myProducts'])
      }
    })
  }

  getProductList() {
    return this.http.get<{data: Product[]}>('http://localhost:3000/products');
  }

  getProductListbyCat(name:string) {
    return this.http.get<{data: Product[]}>('http://localhost:3000/products/category/'+name);
  }

  getProductDetail(key: String){
    return this.http.get<{data: Product}>("http://localhost:3000/products/single/"+key);
  }


  addProduct(serverUrl, product) {
    this.http.post(serverUrl,{data:product}).subscribe(res=>{


      if(res.message=="success"){
        alert("Added Successfully")
        this.isAdded=true
        this.router.navigate(['product', 'new'])
      }
      else{
        this.isAdded=false
      }

    },err=>{
      this.isAdded=false
    })
    return this.isAdded;
  }
}
