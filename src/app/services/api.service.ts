import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private APIBaseURL = 'https://my-json-server.typicode.com/saikatmahapatra/pet-peers/';
  constructor(private http: HttpClient) { }
  
  getPets() {
    console.log('API Service');
    return this.http.get(this.APIBaseURL + 'pets');
  }
}
