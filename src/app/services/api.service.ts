import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private APIBaseURL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  
  getPets() {
    return this.http.get(this.APIBaseURL + 'pets');
  }
}
