import {Component, OnInit, OnDestroy} from '@angular/core';
import {Product} from '../../../models/Product';
import {ProductServiceService} from '../product-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from "rxjs";

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

    id: string;
    name: string;
    productDet: Product;
    private subscription: Subscription;
    allProduct: Product[] = [];
    productCategory: Product[] = [];


    constructor(
        private productService: ProductServiceService,
        private route: ActivatedRoute, private router: Router) {
        this.subscription = route.params.subscribe((params: any) => {
            this.id = params['id'];
        })
    }

    ngOnInit() {
        this.getProductDetail(this.id);

    }


    getProductDetail(id: String) {
        const x = this.productService.getProductDetail(id).subscribe((prod) => {
            //uncomment it when server starts
             let p = prod.data;
            console.log(prod)
            this.productDet = new Product(p._id, p.name, p.category, p.price, p.isAvailable, p.image, p.description);
            localStorage.setItem('relatedCat',p.category.toString().toLowerCase().trim());
            console.log("+++++++++++" + this.name);
            this.getProductsByCat();
            this.getAllProducts();
        });
    }


    getProductsByCat() {
        this.productService.getProductListbyCat(localStorage.getItem('relatedCat')).subscribe(res => {
            console.log(localStorage.getItem('relatedCat'));
            console.log(res);

            this.productCategory.push(...res);


            console.log(this.productCategory);
        }, err => {
            console.log(err)
        })

    }

    getAllProducts() {
        this.productService.getProductList().subscribe(res => {


            res.forEach(p => {
                let prod = new Product(p._id, p.name, p.category, p.price, p.isAvailable, p.image, p.description);
                this.allProduct.push(prod);

            });
        }, err => {
            console.log(err)
        })

    }


    goCheckout(value) {
        localStorage.setItem('tempProd', JSON.stringify(value));
        this.router.navigate(['products', 'buy', 'checkout'])
    }


    goDetails(e){
        alert(e)
        this.router.navigate(['products','get', e])
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}




