import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Operation } from '../models/operation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  api_url = '/api/api/operations/'

  constructor(private http: HttpClient) { }
  
  addOperation(operation: Operation) :Observable<any>{
    return this.http.post<any>(this.api_url, operation, this.httpOptions)
  }
  deleteOperation(id: number) :Observable<any>{
    return this.http.delete<any>(this.api_url +id)
  }
  getOperation(id: number) :Observable<any>{
    return this.http.get<any>(this.api_url +id)
  }
  getOperations(page: number, numberPerPage: number) :Observable<any>{
    return this.http.get<any>(this.api_url + '?page=' + page + '&number=' + numberPerPage)
  }
  getOperationsByValue(page: number, numberPerPage: number, value: string) :Observable<any>{
    return this.http.get<any>(this.api_url + '?page=' + page + '&number=' + numberPerPage + '&value=' + value)
  }

  upload(file: File, id: any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('files', file);
    const req = new HttpRequest('POST',
      `${this.api_url}` +'files/'+ id ,
      formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  deleteFile(id: number) :Observable<any>{
    return this.http.delete<any>(this.api_url+ 'files/' +id)
  }
}
