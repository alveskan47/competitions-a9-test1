import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(page: number = 1, perPage: number = 10): Observable<any> {
    const params = new HttpParams().set('page', page.toString()).set('per_page', perPage.toString());
    return this.http.get<any>(this.apiUrl, {params});
  }

}
