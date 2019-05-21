import {Component, OnInit, OnDestroy} from '@angular/core';
import {ProductServiceService} from '../product-service.service';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";


@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
    product: any={}
    serverUrl: string = 'http://localhost:3000/products/add/new';
    uploadForm: FormGroup;
    file: any;

    constructor(private productService: ProductServiceService,
                 private httpClient: HttpClient) {
    }

    ngOnInit() {
    }

    onUploadImage(event) {
        if(event.target.files.length>0){
            this.file = <File>event.target.files[0];
        }

    }

    onSubmit(form) {
        // console.log(form.value);


        // const formData=new FormData();
        // formData.append('image', this.file);
        // formData.append('name', form.value.name);
        // formData.append('name', form.value.category);
        // formData.append('name', form.value.description);
        // formData.append('name', form.value.price);

        const data=form.value;

        data.image=this.file;
        console.log(data.name+" "+data.category+" "+data.image);

        this.productService.addProduct(this.serverUrl, formData);
    }

}
