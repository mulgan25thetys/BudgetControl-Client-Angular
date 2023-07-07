import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Capital } from '../models/capital';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  api_url = '/api/api/capitals/'

  constructor(private http: HttpClient) { }
  
  getOne(id: number): Observable<any> {
    return this.http.get<any>(this.api_url + id)
  }

  getAll(number: number): Observable<any> {
    return this.http.get<any>(this.api_url + '?number=' + number)
  } 

  getWealth(): Observable<any> {
    return this.http.get<any>(this.api_url+'wealth')
  } 

  getReport(): Observable<any> {
    return this.http.get<any>(this.api_url+'reports')
  } 
}
