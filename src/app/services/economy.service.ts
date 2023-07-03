import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Economie } from '../models/economie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EconomyService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  api_url = '/api/api/economies/'

  constructor(private http: HttpClient) { }
  
  addEconomy(economy: Economie) :Observable<any> {
    return this.http.post<any>(this.api_url, economy, this.httpOptions)
  }
  editEconomy(economy: Economie) :Observable<any> {
    return this.http.put<any>(this.api_url, economy, this.httpOptions)
  }
  getEconomy(id: number): Observable<any> {
    return this.http.get<any>(this.api_url+ id)
  }
  getEconomies() :Observable<any>{
    return this.http.get<any>(this.api_url)
  }
  deleteEconomy(id: number) :Observable<any>{
    return this.http.delete<any>(this.api_url+id)
  }
}
