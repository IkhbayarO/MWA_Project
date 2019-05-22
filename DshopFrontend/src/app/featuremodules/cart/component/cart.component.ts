import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { Cart } from '../model/cart.model';
import {TokenReaderService} from "../../../token-reader.service";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{
    cartList: Cart[];
    cartCheckOut: Cart;
    cartDelete: Cart;
    isThereList: boolean;
    constructor(private cartService: CartService, private _router: Router,public tokenReader:TokenReaderService) {
        this.cartList = new Array<Cart>();
        this.cartCheckOut = new Cart();
        this.cartDelete = new Cart();
        this.isThereList = true;
    }

    ngOnInit() {
        this.getCartList();
    }

    public getCartList() {
        let user = this.tokenReader.getLoggedUserInfo()
        this.cartService.getCartList(user.id).subscribe((res) => {

            this.cartList.push(...res.data[0].cart)
            console.log(res.data[0].cart)

        });
    }

    public checkOutItem(cart) {
        console.log(JSON.stringify(cart));
        localStorage.setItem('tempProd',JSON.stringify(cart));
        this._router.navigate(['products', 'buy', 'checkout']);
    }

    public deleteItem(cart) {
        this.cartService.deleteItem(cart).subscribe((res) => {
            console.log(res);
            this.getCartList();
        });
    }

    private reset() {
        this.cartList = new Array<Cart>();
        this.cartCheckOut = new Cart();
        this.cartDelete = new Cart();
        this.isThereList = true;
    }
}