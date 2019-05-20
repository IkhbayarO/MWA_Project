import { Component, OnInit, OnDestroy} from '@angular/core';
import {Product} from '../../../models/Product';
import {ProductServiceService} from '../product-service.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  productDet: Product;
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
  }



  getProductDetail(id: String) {
    const x = this.productService.getProductDetail(id).subscribe((prod) => {
      let p=prod.data;
      this.productDet=new Product(p._id, p.name, p.category, p.price, p.isAvailable, p.image, p.description);
    });

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}




