import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  api_url = '/api/'
  constructor(private http: HttpClient) { }

  get_system_info() : Observable<any>{
    return this.http.get<any>(this.api_url+'system')
  }
  getReport(controller:string): Observable<any> {
    return this.http.get<any>(this.api_url + 'api/' + controller + '/' + 'reports')
  }
}