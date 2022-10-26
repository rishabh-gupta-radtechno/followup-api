import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }
  get isLoggedIn(): boolean {
    const Token = JSON.parse(localStorage.getItem('Token')!);
    return Token !== null ? true : false;
  }
}
