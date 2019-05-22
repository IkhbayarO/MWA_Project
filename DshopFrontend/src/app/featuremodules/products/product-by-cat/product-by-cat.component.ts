import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from '../product-service.service';
import {Product} from '../../../models/Product';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from "rxjs";

@Component({
    selector: 'app-product-by-cat',
    templateUrl: './product-by-cat.component.html',
    styleUrls: ['./product-by-cat.component.css']
})
export class ProductByCatComponent implements OnInit {
    productList: any[] = [];
    product: Product;
    name: string;
    private subscription: Subscription;

    constructor(private  productService: ProductServiceService, private route: ActivatedRoute,
                private router: Router) {
        this.subscription = route.params.subscribe((params: any) => {
            this.name = params['name'];
        })
    }

    ngOnInit() {
        this.getProductsByCat();
    }

    goDetails(e) {
        this.router.navigate(['products', 'get', e])
    }

    getProductsByCat() {

        this.productService.getProductListbyCat(this.name).subscribe(res => {
            console.log("Hello");
            console.log(res);
            this.productList.push(...res);
        }, err => {
            console.log(err)
        })

    }
}
