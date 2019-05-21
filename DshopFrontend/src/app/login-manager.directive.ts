import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[logged]'
})
export class LoginManagerDirective implements OnInit {

  constructor(private element:ElementRef) { }



  ngOnInit(){
    console.log(localStorage.getItem('token'))
    if(localStorage.getItem('token')!=null){

      this.element.nativeElement.style.display='none'
    }else{
      this.element.nativeElement.style.display='inline-block'

    }
  //   console.log(this.element.nativeElement.style)
  // this.element.nativeElement.style.display='none'
  }

}
