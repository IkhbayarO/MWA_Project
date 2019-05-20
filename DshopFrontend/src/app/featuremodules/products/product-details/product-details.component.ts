import { Component, OnInit, OnDestroy} from '@angular/core';
import {Product} from '../../../models/Product';
import {ProductServiceService} from '../product-service.service';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: Product;
  id: string;
  private subscription: Subscription;

  constructor(
      private productService: ProductServiceService,
      private route: ActivatedRoute) {
    this.subscription=route.params.subscribe((params: any)=>{
      this.id=params['id'];
    })
  }
  ngOnInit() {
    this.getProductDetail(this.id);
    console.log(this.id);
  }


  getProductDetail(id: String) {
    const x = this.productService.getProductDetail(id).subscribe((prod) => {
      console.log(prod);
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}




