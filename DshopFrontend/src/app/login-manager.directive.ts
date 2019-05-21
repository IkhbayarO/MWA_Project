import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[logged]'
})
export class LoginManagerDirective implements OnInit {

  constructor(private element:ElementRef) { }



  ngOnInit(){
<<<<<<< HEAD
      const token = localStorage.getItem('token')
    console.log(token)
    if(token!=null){

    //  if(this.element.nativeElement.id=="loginNav"){
    //    this.element.nativeElement.style.display='none'
    //  }
    //
    //  if(this.element.nativeElement.id=="logoutNav"){
    //   this.element.nativeElement.style.display='inline-block'
    // }
    //
    // if(this.element.nativeElement.id=="navItemname"){
    //   this.element.nativeElement.style.display='inline-block'
    // }

        this.element.nativeElement.style.display='none'

=======
    console.log(localStorage.getItem('token'))
    if(localStorage.getItem('token')!=null){

      this.element.nativeElement.style.display='none'
>>>>>>> 38be8c3332d546424c3b81aa0e86a09d54429c1c
    }else{
      this.element.nativeElement.style.display='inline-block'

<<<<<<< HEAD
        this.element.nativeElement.style.display='inline-block'
    //   if(this.element.nativeElement.id=="loginNav"){
    //     this.element.nativeElement.style.display='inline-block'
    //   }
    //
    //   if(this.element.nativeElement.id=="logoutNav"){
    //    this.element.nativeElement.style.display='none'
    //  }
    //
    //  if(this.element.nativeElement.id=="navItemname"){
    //   this.element.nativeElement.style.display='none'
    // }
=======

>>>>>>> 38be8c3332d546424c3b81aa0e86a09d54429c1c
    }
  //   console.log(this.element.nativeElement.style)
  // this.element.nativeElement.style.display='none'
  }

}
