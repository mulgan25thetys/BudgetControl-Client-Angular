import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  constructor(private http:HttpClient) { }
}
