import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../model/cart.model';

@Injectable()

export class CartService {
    cartUrl = 'http://localhost:3000/carts';
    
    constructor(private _http: HttpClient){

    }

    public getCartList(): Observable<any> {
        return this._http.get(this.cartUrl);
    }

    public deleteItem(cart): Observable<any> {
        return this._http.delete(this.cartUrl, cart);
    }
}