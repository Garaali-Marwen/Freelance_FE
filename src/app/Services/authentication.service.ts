import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {EncryptionService} from "./encryption.service";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient,
                private encryptionService: EncryptionService) {
    }

    public login(request: any): Observable<any> {
        return this.http.post<any>(this.apiServerUrl + `/api/user/authenticate`, request);
    }

    public refreshAccessToken(refreshToken: string): Observable<any> {
        const headers = new HttpHeaders({
            Authorization: 'Bearer ' + refreshToken,
        });

        return this.http.post<any>(this.apiServerUrl + '/api/user/refresh-token', {}, {headers}).pipe(
            tap((response) => {
                if (response && response.accessToken) {
                    this.setToken(response.accessToken);
                }
            })
        );
    }


    public getUserId() {
        const encryptedItemName = this.encryptionService.encrypt('userId');
        const encryptedUserId = localStorage.getItem(encryptedItemName);
        if (encryptedUserId) {
            return this.encryptionService.decrypt(encryptedUserId);
        }
        return '';
    }

    public setUserId(userId: number) {
        const encryptedItemName = this.encryptionService.encrypt('userId');
        const encryptedUserId = this.encryptionService.encrypt(userId.toString());
        localStorage.setItem(encryptedItemName, encryptedUserId);
    }

    public getUserEmail() {
        const encryptedItemName = this.encryptionService.encrypt('userEmail');
        const encryptedUserEmail = localStorage.getItem(encryptedItemName);
        if (encryptedUserEmail) {
            return this.encryptionService.decrypt(encryptedUserEmail);
        }
        return null;
    }

    public setUserEmail(userEmail: string) {
        const encryptedItemName = this.encryptionService.encrypt('userEmail');
        const encryptedUserEmail = this.encryptionService.encrypt(userEmail);
        localStorage.setItem(encryptedItemName, encryptedUserEmail);
    }

    public setRoles(role: string) {
        const encryptedItemName = this.encryptionService.encrypt('role');
        const encryptedRole = this.encryptionService.encrypt(role.toString());
        localStorage.setItem(encryptedItemName, encryptedRole);
    }

    public getRole() {
        const encryptedRole = localStorage.getItem(this.encryptionService.encrypt('role'));
        if (encryptedRole !== null) {
            return this.encryptionService.decrypt(encryptedRole);
        }
        return null;
    }


    public setToken(token: string) {
        const encryptedItemName = this.encryptionService.encrypt('token');
        const encryptedToken = this.encryptionService.encrypt(token);
        localStorage.setItem(encryptedItemName, encryptedToken);
    }

    public getToken() {
        const encryptedItemName = this.encryptionService.encrypt('token');
        const encryptedToken = localStorage.getItem(encryptedItemName);
        if (encryptedToken) {
            return this.encryptionService.decrypt(encryptedToken);
        }
        return '';
    }

    public setRefreshToken(refreshToken: string) {
        const encryptedItemName = this.encryptionService.encrypt('refreshToken');
        const encryptedRefreshToken = this.encryptionService.encrypt(refreshToken);
        localStorage.setItem(encryptedItemName, encryptedRefreshToken);
    }

    public getRefreshToken() {
        const encryptedItemName = this.encryptionService.encrypt('refreshToken');
        const encryptedRefreshToken = localStorage.getItem(encryptedItemName);
        if (encryptedRefreshToken) {
            return this.encryptionService.decrypt(encryptedRefreshToken);
        }
        return '';
    }

    public isLoggedIn() {
        return this.getRole() !== null;
    }

    public clear() {
        localStorage.clear();
    }
}
