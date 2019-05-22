import { Injectable } from '@angular/core';
import {HttpEvent , HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  private AUTH_HEADER = "Authorization";
  private token;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token = localStorage.getItem('token');
    const auth = req.clone({
      headers: req.headers.set(this.AUTH_HEADER, "Bearer " + this.token)
    });

    return next.handle(auth);
  }

  constructor() { }
}

