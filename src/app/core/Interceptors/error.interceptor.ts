import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {


        if (error instanceof HttpErrorResponse) {
          if (!error.error.message) {
            error.error.message = 'Something went wrong!!!!!!!!!!'
          }

          Swal.fire({
            icon: "error",
            title: "Error",
            text: error.error.message,
          });


          if (error.status === 401) {
            this.router.navigate(['/auth']);
            return throwError(() => error.error);
          }
          else if (error.status === 0) {
            return throwError(() => error);
          }
          else {
            return throwError(() => error.error);
          }
        } else {
          console.error('Network error occurred:', error);

          return throwError(() => error);
        }
      })
    );
  }
}
