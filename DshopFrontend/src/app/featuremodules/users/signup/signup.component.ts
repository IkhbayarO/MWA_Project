import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  // template:"<div>SIgnup</div>",
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //  user = new User('Asaad','Saad','asaad','asaad@mum.edu', '32323232')
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
  }
}
