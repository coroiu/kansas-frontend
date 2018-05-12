import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

export const API_URL = environment.apiUrl + '/';

@Injectable()
export class ApiClientService {

  private defaultHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  get<T = any>(endpoint: string): Observable<T> {
    return this.http.get(API_URL + endpoint, { headers: this.defaultHeaders }) as Observable<T>;
  }

  post<T = any>(endpoint: string, data: any): Observable<T> {
    return this.http.post(API_URL + endpoint, data, { headers: this.defaultHeaders }) as Observable<T>;
  }

  put<T = any>(endpoint: string, data: any): Observable<T> {
    return this.http.put(API_URL + endpoint, data, { headers: this.defaultHeaders }) as Observable<T>;
  }

  delete<T = any>(endpoint: string): Observable<T> {
    return this.http.delete(API_URL + endpoint, { headers: this.defaultHeaders }) as Observable<T>;
  }
}
