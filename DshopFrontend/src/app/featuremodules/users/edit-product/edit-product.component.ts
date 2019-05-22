import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../products/product-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: any={}
  serverUrl = "http://localhost/3000/products"
  
  avOption :any = [
   {name:true},
    {name:false}
  ]

  selectedValue:any=false
  
  constructor(public productService:ProductServiceService) { }

  ngOnInit() {
    this.product = JSON.parse(localStorage.getItem('prodTochange'))
    
    this.selectedValue = this.product.isAvailable
   
  }

  onAdd(form) {
    // console.log(form.value);

    console.log(form.value)
    this.productService.updateProduct(this.serverUrl,form.value)
}
}
