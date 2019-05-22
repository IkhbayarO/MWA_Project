import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from "../product-service.service";
import {TokenReaderService} from "../../../token-reader.service";

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

    product: any = {};
    address: any = {};
    payment: any = {};
    temp: any = {};

    addressUrl: any = "http://localhost:3000/users/update/address";
    productUrl: any = "http://localhost:3000/products";
    // urlPurchase: any="";
    // urlSell: any="";

    checkoutUrl: string = "";

    constructor(private productService: ProductServiceService, private tokenService: TokenReaderService) {

    }

    ngOnInit() {
        this.product = JSON.parse(localStorage.getItem("tempProd"));
    }

    onAdd(form) {
        this.temp = form.value;

        const address: any = {state: this.temp.state, city: this.temp.city, street: this.temp.street};

        let product = JSON.parse(localStorage.getItem('tempProd'));
        let loggedUser = this.tokenService.getLoggedUserInfo();

        product.isAvailable = false;

        //
        let payment = this.temp.payment;

        console.log(address);
        console.log(product);
        console.log(payment)

        // this.productService.createPurchase(this.urlPurchase, purchaseAndseller);
        // this.productService.createSell(this.urlSell, purchaseAndseller);

        this.productService.updateAddress(this.addressUrl, address);
        this.productService.checkout(this.checkoutUrl, product, payment, loggedUser._id);
        this.productService.updateProduct(this.productUrl, product)


    }
}
