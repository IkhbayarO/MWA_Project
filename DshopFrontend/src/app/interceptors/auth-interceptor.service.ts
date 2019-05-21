import { Injectable } from '@angular/core';
import {HttpEvent , HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  private AUTH_HEADER = "Authorization";
  private token = localStorage.getItem('token')

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const auth = req.clone({
      headers: req.headers.set(this.AUTH_HEADER, "Bearer " + this.token)
    });

    return next.handle(auth);
  }

  constructor() { }
}

