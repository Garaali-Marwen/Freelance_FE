import {Injectable} from '@angular/core';
import {Observable, throwError} from "rxjs";
import {AuthenticationService} from "./authentication.service";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class TokenRefreshService {

  constructor(private authenticationService: AuthenticationService) {
  }

  public isTokenExpired(): boolean {
    const token = this.authenticationService.getToken();
    if (token.length == 0) {
      return true;
    }
    const decodedToken = jwtDecode(token) as any;
    const expiration = decodedToken.exp * 1000;
    return Date.now() > expiration;
  }

  public refreshAccessToken(): Observable<any> {
    const refreshToken = this.authenticationService.getRefreshToken();

    if (!refreshToken) {
      return throwError(() => new Error('No refresh token available'));
    }

    return this.authenticationService.refreshAccessToken(refreshToken);
  }

}
