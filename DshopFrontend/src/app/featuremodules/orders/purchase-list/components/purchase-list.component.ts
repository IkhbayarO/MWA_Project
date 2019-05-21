import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Purchse } from '../../models/purchse.model';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css'],
  providers: [OrdersService]
})
export class PurchaseListComponent implements OnInit {

  purcheseList: Purchse[];
  purchseObject: Purchse;
  length = 0;

  constructor(private ordersService: OrdersService) { 
      this.purcheseList = new Array<Purchse>();
      this.purchseObject = new Purchse();
  }

  ngOnInit() {
    this.getPurchseList();
  }

  private getPurchseList() {
    this.ordersService.getPurchseList().subscribe((res) => {
        let purchse = new Purchse();
        
        for(let i=0; i<res.length; i++){
          purchse.userId = res[i]._id;

          for(let j=0; j< res[i].purchases.length; j++){
             this.length += 1; 
             purchse.purchseId = res[i].purchases[j]._id;
             purchse.date = res[i].purchases[j].date;
             purchse.status = res[i].purchases[j].status;
             purchse.productId = res[i].purchases[j].product._id;
             purchse.name = res[i].purchases[j].product.name;
             purchse.category = res[i].purchases[j].product.category;
             purchse.price = res[i].purchases[j].product.price;
             purchse.isAvailable = res[i].purchases[j].product.isAvailable;
             purchse.image = res[i].purchases[j].product.image[0];
             purchse.description = res[i].purchases[j].product.description;
             this.purcheseList.push(purchse);
          }
        }

    });
  }
  public cancelOrder(purchseOrder) {
    console.log("purchseorder  in cancelorder method: "+JSON.stringify(purchseOrder));
    console.log("purchseorder  in cancelorder method purchseObject: "+JSON.stringify(this.purchseObject));
    this.ordersService.cancelOrder(purchseOrder).subscribe((res) => {
        console.log("Response: "+res);
     })
  }
}
