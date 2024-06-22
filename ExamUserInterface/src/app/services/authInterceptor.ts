import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HTTP_INTERCEPTORS,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { LoginserviceService } from './loginservice.service';

  
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(private login:LoginserviceService) {}
  
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {


      if (req.method === 'OPTIONS') {
        return next.handle(req);
    }
      let authReq = req;
      const token = this.login.getToken();

      
      if (token != null) {
        authReq = authReq.clone({
          setHeaders:{ 'Authorization': `Bearer ${token}` },
      
        }
    );
      }
      return next.handle(authReq);
    }
  }
  
  export const authInterceptorProviders = [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ];
  