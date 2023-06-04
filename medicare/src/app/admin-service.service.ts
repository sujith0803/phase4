import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { Observable } from 'rxjs'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private baseURL='http://localhost:8080';
        constructor(private httpClient : HttpClient) { }
    getAllAdmin(): Observable<Admin[]> {
      return this.httpClient.get<Admin[]>(`${this.baseURL}/admin/all`);
    }

    addAdmin(admin : Admin): Observable<object> {
      return this.httpClient.post(`${this.baseURL}/admin`,admin)
    }

    saveUser(user : User):Observable<object> {
      return this.httpClient.post(`${this.baseURL}/saveUser`,user)}
}