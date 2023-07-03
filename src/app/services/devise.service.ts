import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Devise } from '../models/devise';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {
  
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/jspn'
      }
    )
  }

  api_url = '/api/api/devises/'

  constructor(private http: HttpClient) { }
  
  getAllDevises(): Observable<any> {
    return this.http.get<any>(this.api_url)
  }
  getDefault(): Observable<any> {
    return this.http.get<any>(this.api_url + 'default')
  }
  getOne(id: number): Observable<any> {
    return this.http.get<any>(this.api_url + id)
  }
  getAllRegions(): Observable<any> {
    return this.http.get<any>(this.api_url+'regions')
  }
  deleteDevise(id :number): Observable<any>{
    return this.http.delete<any>(this.api_url+id)
  }
  addDevise(devise:Devise): Observable<any>{
    return this.http.post<any>(this.api_url+'new', devise,this.httpOptions)
  }
  setDefault(id: number): Observable<any>{
    return this.http.put<any>(this.api_url+id, null,this.httpOptions)
  }
}
