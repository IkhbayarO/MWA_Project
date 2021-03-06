import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {Product} from "../../models/Product";
import {FILE_UPLOAD_DIRECTIVES,FileUploader} from 'ng2-file-upload'



@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
 
  isAdded:boolean;
  isChecked: boolean;
  isAddressUpdated: boolean;
  isUpdated: boolean;

  constructor(public http: HttpClient, private router: Router) { }

  emitter=new EventEmitter<any>();

  emitValue(value: any){
    this.emitter.emit(value);
  }

  //send ajax request request
  //create objet of product
  //import your product class

  updateProduct2(serverUrl: string, value: any) {
   
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


  addProduct(serverUrl, id, product) {
    console.log(product)
    this.http.post(serverUrl+id,{data:product}).subscribe(res=>{


      if(res.message=="success"){

        this.isAdded=true
        this.router.navigate(['products'])
      }
      else{
        this.isAdded=false
      }

    },err=>{
      this.isAdded=false
    })
    return this.isAdded;
  }


  checkout(serverUrl, product, payment, user){
    this.http.post(serverUrl, {product:product, payment:payment,customerId: user}).subscribe(res=>{

      if(res.message=="success"){
        alert("Checkout done");
        this.isChecked=true;
        this.router.navigate(['orders']);
      }else{
        this.isChecked=false;
      }
    }, err=>{
      this.isChecked=false;
    });
    return this.isChecked;
  }


  updateAddress(serverUrl, address, id){
    this.http.put(serverUrl+"/"+id, {data:address}).subscribe(res=>{

      if(res.message=="success"){

        this.isAddressUpdated=true;
        this.router.navigate(['orders']);
      }else{
        this.isAddressUpdated=false;
      }
    }, err=>{
      this.isAddressUpdated=false;
    });
    return this.isAddressUpdated;
  }


  updateProduct(serverUrl, product){

    this.http.put(serverUrl+"/"+product._id, {data:product}).subscribe(res=>{

      if(res.message=="success"){
        alert("Checkout done");
        // this.isCreatedPurchase=true;
        this.router.navigate(['orders']);
      }else{
        this.isUpdated=false;
      }
    }, err=>{
      this.isUpdated=false;
    });
    return this.isUpdated;
  }

  uploadFile(file){



    this.http.post("http://localhost:3000/products/upload",{data:file}).subscribe((res)=>{
      console.log(res)
    })
  }

  addtoCart(prod,id){
    this.http.post("http://localhost:3000/carts/"+id,{data:prod}).subscribe((res)=>{
      this.router.navigate(['carts'])
    })
  }

}
