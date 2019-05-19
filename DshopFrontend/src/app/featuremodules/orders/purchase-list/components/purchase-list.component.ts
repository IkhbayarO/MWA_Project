import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Purchse } from '../../models/purchse.model';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {

  purcheseList: Purchse[];
  singlePurchse: Purchse;
  status: boolean;

  constructor(private ordersService: OrdersService) { 
      this.purcheseList = new Array<Purchse>();
      this.singlePurchse = new Purchse();
      this.status = true;
  }

  ngOnInit() {
    this.getPurchseList();
  }

  private getPurchseList() {
    this.purcheseList[0].id = "12345";
    this.purcheseList[0].userId = "67891";
    this.purcheseList[0].name = "test";
    this.purcheseList[0].price = 4562.3;
    this.purcheseList[0].status = "pending";
    this.purcheseList[0].isAvailable = false;
    this.purcheseList[0].category = "electronics";
    this.purcheseList[0].date = new Date('5/8/2019');
    this.purcheseList[0].description = "in a nice form";

    if(this.purcheseList[0].status === "delivred")
      this.status = true;
    else
      this.status = false;
  }
  public cancelOrder(purchseOrder: Purchse) {

  }
}
