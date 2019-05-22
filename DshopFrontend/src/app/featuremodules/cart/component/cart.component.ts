import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { Cart } from '../model/cart.model';

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
    constructor(private cartService: CartService, private _router: Router) {
        this.cartList = new Array<Cart>();
        this.cartCheckOut = new Cart();
        this.cartDelete = new Cart();
        this.isThereList = false;
    }

    ngOnInit() {
        this.getCartList();
    }

    public getCartList() {
        this.cartService.getCartList().subscribe((res) => {
            this.reset();
            let addCart = new Cart();
            let datePipe = new DatePipe('en-US');
            for(let i=0; i<res.length; i++){
                addCart.userId = res[i]._id;
                for(let j=0; j<res[i].cart.length; j++){
                    this.isThereList = true;
                    addCart.cartId = res[i].cart[j]._id;
                    addCart.productId = res[i].cart[j].product._id;
                    addCart.name = res[i].cart[j].product.name;
                    addCart.category = res[i].cart[j].product.category;
                    addCart.price = res[i].cart[j].product.price;
                    addCart.isAvailable = res[i].cart[j].product.isAvailable;
                    addCart.imageString = res[i].cart[j].product.image[0];
                    addCart.image = res[i].cart[j].product.image;
                    addCart.description = res[i].cart[j].product.description
                    addCart.dateString = datePipe.transform(res[i].cart[j].date, 'dd/MM/yyyy');
                    addCart.date = res[i].cart[j].date;
                    this.cartList.push(addCart);
                }
            }
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