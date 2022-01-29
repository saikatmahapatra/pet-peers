import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isTokenExpired() {
    //should call JWT token service
    return false;
  }

  isLoggedIn() {
    // should call API
    return true;
  }
}