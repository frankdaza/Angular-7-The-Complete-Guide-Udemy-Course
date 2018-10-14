import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor() { }

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
        this.isLoggedIn = true;
        console.log(`El usuario se ha logueado exitosamente. ${this.isLoggedIn}`);
      })      
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    console.log(`El usuario ha cerrado sesión exitosamente. ${this.isLoggedIn}`);
  }
  
} 
