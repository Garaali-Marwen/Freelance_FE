import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Client} from "../Entities/Client";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.development";

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    public signUp(client: Client): Observable<Client> {
        return this.http.post<Client>(`${this.apiServerUrl}/api/client/add`, client);
    }
}
