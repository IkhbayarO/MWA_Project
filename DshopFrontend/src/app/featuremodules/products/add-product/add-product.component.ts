import {Component, OnInit, OnDestroy} from '@angular/core';
import {ProductServiceService} from '../product-service.service';
import {HttpClient} from "@angular/common/http";
import {TokenReaderService} from "../../../token-reader.service";


@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
    product: any={}
    serverUrl: string = 'http://localhost:3000/products/add/';
    file: any;
    fileData: File = null;
    constructor(private productService: ProductServiceService,
                 private httpClient: HttpClient, private tokenReader:TokenReaderService) {
    }



    ngOnInit() {
    }

    onUploadImage(event) {
        alert("fasfhasjdfg")
        if(event.target.files.length>0){
            this.file = <File>event.target.files[0];
            this.productService.uploadFile(this.file)
        }



    }

    onSubmit(form) {


        const data=form.value;
       const user = this.tokenReader.getLoggedUserInfo();




        //changing
        const formData = new FormData();
        formData.append('image', this.file.name);
        formData.append('name', data.name);
        formData.append('category', data.category);
        formData.append('description', data.description);
        formData.append('price', data.price);
       form.value.image=this.file.name


        this.productService.addProduct(this.serverUrl, user.id, form.value);




    }

}
