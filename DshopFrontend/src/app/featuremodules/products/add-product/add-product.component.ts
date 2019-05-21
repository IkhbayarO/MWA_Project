import {Component, OnInit, OnDestroy} from '@angular/core';
import {ProductServiceService} from '../product-service.service';
import {Product} from '../../../models/Product';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs";
import {User} from "../../users/model/User";


@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
    product: any;
    temp: any={};
    serverUrl:string='http://localhost:3000/products/add/new';
    selectedFile: object;

    constructor(private productService: ProductServiceService) {}
    ngOnInit() {}

    onUploadImage(event){
        this.selectedFile=event.target.file[0];
    }

    onAdd(form) {
      this.temp=form.value();
      this.temp.image=this.selectedFile;
      this.productService.addProduct(this.serverUrl, this.temp);
    }

}
