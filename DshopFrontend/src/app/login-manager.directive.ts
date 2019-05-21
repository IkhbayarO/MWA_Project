import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[logged]'
})
export class LoginManagerDirective implements OnInit {

  constructor(private element:ElementRef) { }

   

  ngOnInit(){
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

    }else{

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
    }
  //   console.log(this.element.nativeElement.style)
  // this.element.nativeElement.style.display='none'
  }

}
