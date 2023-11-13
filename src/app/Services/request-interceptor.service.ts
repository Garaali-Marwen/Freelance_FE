import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {TokenRefreshService} from './token-refresh.service';
import {Observable, throwError} from 'rxjs';
import {catchError, switchMap} from 'rxjs/operators';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class RequestInterceptorService implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private tokenRefreshService: TokenRefreshService,
    private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authenticationService.getToken();
    const refreshToken = this.authenticationService.getRefreshToken();
    if (request.url.endsWith('/refresh-token')) {
      request = this.addTokenToRequest(request, refreshToken);
      return next.handle(request);
    }
    request = this.addTokenToRequest(request, token);
    return next.handle(request).pipe(
      catchError((error) => {
        if (error.status === 403) {
          if (this.tokenRefreshService.isTokenExpired() && this.authenticationService.isLoggedIn()) {
            return this.tokenRefreshService.refreshAccessToken().pipe(
              switchMap(() => {
                request = this.addTokenToRequest(request, this.authenticationService.getToken());
                return next.handle(request);
              }),
              catchError((refreshError) => {
                console.error('Token refresh failed:', refreshError);
                this.router.navigate(['/login']);
                return throwError(() => refreshError);
              })
            );
          } else {
            this.router.navigate(['/login']);
            return throwError(() => error);
          }
        }
        return throwError(() => error);
      })
    );
  }


  private addTokenToRequest(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
