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
  singlePurchse: Purchse;

  constructor(private ordersService: OrdersService) { 
      this.purcheseList = new Array<Purchse>();
      this.singlePurchse = new Purchse();
  }

  ngOnInit() {
    this.getPurchseList();
  }

  private getPurchseList() {
    this.ordersService.getPurchseList().subscribe((res) => {
        console.log("Res:  "+res);
        let purchse = new Purchse();
        for(let i=0; i<res.length; i++){
          purchse.userId = res[i]._id;

          for(let j=0; j< res[i].purchases.length; j++){
             purchse.purchseId = res[i].purchases[j]._id;
             purchse.date = res[i].purchases[j].date;
             purchse.status = res[i].purchases[j].status;
             purchse.productId = res[i].purchases[j].product._id;
             purchse.name = res[i].purchases[j].product.name;
             purchse.category = res[i].purchases[j].product.category;
             purchse.price = res[i].purchases[j].product.price;
             purchse.isAvailable = res[i].purchases[j].product.isAvailable;
             purchse.image = res[i].purchases[j].product.image;
             purchse.description = res[i].purchases[j].product.description;
          }

          this.purcheseList.push(purchse);
        }
    });
  }
  public cancelOrder(purchseOrder: Purchse) {

  }
}

/*let purchse1 = new Purchse();
    purchse1.id = "12345";
    purchse1.userId = "67891";
    purchse1.name = "test";
    purchse1.price = 4562.3;
    purchse1.status = "pending";
    purchse1.isAvailable = false;
    purchse1.category = "electronics";
    purchse1.date = new Date('5/8/2019');
    purchse1.description = "in a nice form";

    let purchse2 = new Purchse();
    purchse2.id = "12345";
    purchse2.userId = "67891";
    purchse2.name = "test";
    purchse2.price = 4562.3;
    purchse2.status = "delivred";
    purchse2.isAvailable = false;
    purchse2.category = "electronics";
    purchse2.date = new Date('5/8/2019');
    purchse2.description = "in a nice form";

    this.purcheseList.push(purchse1);
    this.purcheseList.push(purchse2);*/