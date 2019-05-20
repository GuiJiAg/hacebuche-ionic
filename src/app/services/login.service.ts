import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Credential } from '../models/credential';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const apiSignInUrl = 'http://localhost:3000/api/signIn';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router, private http: HttpClient) { }

  isLogged() {
    if (sessionStorage.isLogged) {
      return true;
    }

    return false;
  }

  goToLogin(isLogged) {
    if (!isLogged) {
      this.router.navigate(['/noLogged']);
    }
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  signIn(credentials: Credential): Observable<Credential> {
    return this.http.post<Credential>(apiSignInUrl, credentials, httpOptions).pipe(
      catchError(this.handleError<Credential>('signIn'))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    
      // TODO: send the error to remote logging infrastructure
      console.error(`${operation} failed: ${error.message}`); // log to console instead
    
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
