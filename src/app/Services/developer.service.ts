import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Developer} from "../Entities/Developer";

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public signUp(developer: Developer): Observable<Developer> {
    return this.http.post<Developer>(`${this.apiServerUrl}/api/developer/add`, developer);
  }
}
