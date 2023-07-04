import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {
  
  constructor(private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {

          if ([500].indexOf(err.status) !== -1) {
           // this.router.navigateByUrl('/internal-server-error');
            // this.toastr.warning("Une erreur interne du serveur s'est produite", "Internal server error");
          }

          if ([504].indexOf(err.status) !== -1) {
            
          }

            const error = err
            return throwError(error);
        }))
    }
}
