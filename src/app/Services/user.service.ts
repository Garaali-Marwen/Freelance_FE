import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../Entities/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public verifyAddEmail(email: string): Observable<boolean> {
    return this.http.get<boolean>(this.apiServerUrl + `/api/user/email/${email}`);
  }

  public verifyEditEmail(newEmail: string, oldEmail: string): Observable<boolean> {
    return this.http.get<boolean>(this.apiServerUrl + `/api/user/newEmail/${newEmail}/oldEmail/${oldEmail}`);
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.apiServerUrl + `/api/user/id/${id}`);
  }

  public updateUser(formData: FormData): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/api/user/update`, formData)
  }
}
