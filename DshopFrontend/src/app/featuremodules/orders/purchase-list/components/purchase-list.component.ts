import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Purchse } from '../../models/purchse.model';
import {TokenReaderService} from "../../../../token-reader.service";

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css'],
  providers: [OrdersService]
})
export class PurchaseListComponent implements OnInit {

  purchaseList:any=[]
  purchseObject: Purchse;
  length = 2;

  constructor(private ordersService: OrdersService,public tokenReader:TokenReaderService) {
      this.purcheseList = new Array<Purchse>();
      this.purchseObject = new Purchse();
  }

  ngOnInit() {
    this.getPurchseList();
  }

  private getPurchseList() {
      let user = this.tokenReader.getLoggedUserInfo()
    this.ordersService.getPurchseList(user.id).subscribe((res) => {

        console.log(res[0].purchases)
        this.purchaseList.push(...res[0].purchases)

        console.log(this.purchaseList)

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
