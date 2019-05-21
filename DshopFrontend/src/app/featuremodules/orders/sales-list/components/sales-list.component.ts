import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Sales } from '../../models/sales.model';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {
  salesList: Sales[];
  salesObject: Sales;
  length = 0;
  constructor(private ordersService: OrdersService) { 
    this.salesList = new Array<Sales>();
    this.salesObject = new Sales();
  }

  ngOnInit() {
    this.getSalesList();
  }

  public getSalesList() {
    this.ordersService.getSalesList().subscribe((res) => {
        let sales = new Sales();
        for(let i=0; i<res.length; i++){
            sales.userId = res[i]._id;
            for(let j=0; j< res[i].sells.length; j++) {
              this.length += 1; 
              sales.salesId = res[i].sells[j]._id;
              sales.productId = res[i].sells[j].product._id;
              sales.name = res[i].sells[j].product.name
              sales.category = res[i].sells[j].product.category;
              sales.price = res[i].sells[j].product.price;
              sales.isAvailable = res[i].sells[j].product.isAvailable;
              sales.image = res[i].sells[j].product.image[0];
              sales.description = res[i].sells[j].product.description;
              sales.date = res[i].sells[j].date;
              sales.status = res[i].sells[j].status;
              sales.customerId = res[i].sells[j].customer._id;
              sales.firstName = res[i].sells[j].customer.firstName;
              sales.lastName = res[i].sells[j].customer.lastName;
              sales.Phone = res[i].sells[j].customer.Phone;
              sales.email = res[i].sells[j].customer.email;
              sales.street = res[i].sells[j].customer.street;
              sales.city = res[i].sells[j].customer.city;
              sales.state = res[i].sells[j].customer.state;
              sales.zip = res[i].sells[j].customer.zip;
              sales.payment = res[i].sells[j].customer.payment;
              this.salesList.push(sales);
            }
        }
    });
  }

  public editSales(sales) {
    console.log("object  "+ JSON.stringify(sales));
    console.log("Selected value  "+ JSON.stringify(this.salesObject));
    this.ordersService.editSales(sales).subscribe((res) => {
        console.log("Resonse: "+res);
    })
  }
}
