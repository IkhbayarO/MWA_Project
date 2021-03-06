import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Purchse } from '../models/purchse.model';
import { Sales } from '../models/sales.model';
import { Observable } from 'rxjs';

@Injectable()

export class OrdersService {
    purchseUrl = 'http://localhost:3000/purchases';
    salseUrl = 'http://localhost:3000/sells';
    
    constructor(private _http: HttpClient){

    }

    public getPurchseList(id): Observable<any> {
        return this._http.get(this.purchseUrl+"/"+id);
    }

    public cancelOrder(purchseOrder: Purchse): Observable<any>{
        return this._http.post(this.purchseUrl, Purchse);
    }

    public getSalesList(id): Observable<any> {
        return this._http.get(this.salseUrl+"/"+id);
    }

    public editSales(sales: Sales): Observable<any> {
        return this._http.put(this.salseUrl, sales);
    }
}