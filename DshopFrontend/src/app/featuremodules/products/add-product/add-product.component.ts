import {Component, OnInit, OnDestroy} from '@angular/core';
import {ProductServiceService} from '../product-service.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs";
import {Product} from "../../../models/Product";

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
    id: string;
    private subscription: Subscription;

    constructor(
        private productService: ProductServiceService,
        private route: ActivatedRoute
    ) {
        this.subscription = route.params.subscribe((params: any) => {
            this.id = params['id'];
        });
    }

    ngOnInit() {
        this.addProduct(this.id);
    }

    addProduct(id: String) {
        let prod=this.productService.addProduct(id).subscribe()
    };

}
