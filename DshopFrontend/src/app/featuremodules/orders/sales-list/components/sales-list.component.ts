import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Sales } from '../../models/sales.model';
import {TokenReaderService} from "../../../../token-reader.service";

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {
  salesList: Sales[];
  salesObject: Sales;
  length = 0;
  constructor(private ordersService: OrdersService,private tokenReader:TokenReaderService) {
    this.salesList = new Array<Sales>();
    this.salesObject = new Sales();
  }

  ngOnInit() {
    this.getSalesList();
  }

  public getSalesList() {
    let user = this.tokenReader.getLoggedUserInfo()
    this.ordersService.getSalesList(user.id).subscribe((res) => {

         this.salesList.push(...res[0].sells);

        console.log(this.salesList)
    })

  }

  public editSales(sales) {
    console.log("object  "+ JSON.stringify(sales));
    console.log("Selected value  "+ JSON.stringify(this.salesObject));
    this.ordersService.editSales(sales).subscribe((res) => {
        console.log("Resonse: "+res);
    })
  }
}
