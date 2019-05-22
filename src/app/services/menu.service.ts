import { Injectable } from '@angular/core';
import { Food } from '../models/food';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const apiMenuUrl = 'https://hacebuche-api.herokuapp.com/api/menu';
const token = `Bearer ${localStorage.token}`;
const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'authorization': token
  })
};

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  /*   GETs   */
  getEntrees(): Observable<Food[]> {
    return this.http.get<Food[]>(`${apiMenuUrl}/entrees`)
      .pipe(
        catchError(this.handleError<Food[]>('getEntrees', []))
    );
  }

  getToasts(): Observable<Food[]> {
    return this.http.get<Food[]>(`${apiMenuUrl}/toasts`)
      .pipe(
        catchError(this.handleError<Food[]>('getToasts', []))
    );
  }

  getSalads(): Observable<Food[]> {
    return this.http.get<Food[]>(`${apiMenuUrl}/salads`)
      .pipe(
        catchError(this.handleError<Food[]>('getSalads', []))
    );
  }

  getPastas(): Observable<Food[]> {
    return this.http.get<Food[]>(`${apiMenuUrl}/pastas`)
      .pipe(
        catchError(this.handleError<Food[]>('getPastas', []))
    );
  }

  getScrambleds(): Observable<Food[]> {
    return this.http.get<Food[]>(`${apiMenuUrl}/scrambleds`)
      .pipe(
        catchError(this.handleError<Food[]>('getScrambleds', []))
    );
  }

  getFishs(): Observable<Food[]> {
    return this.http.get<Food[]>(`${apiMenuUrl}/fishs`)
      .pipe(
        catchError(this.handleError<Food[]>('getFishs', []))
    );
  }

  getMeats(): Observable<Food[]> {
    return this.http.get<Food[]>(`${apiMenuUrl}/meats`)
      .pipe(
        catchError(this.handleError<Food[]>('getMeats', []))
    );
  }

  getDesserts(): Observable<Food[]> {
    return this.http.get<Food[]>(`${apiMenuUrl}/desserts`)
      .pipe(
        catchError(this.handleError<Food[]>('getDesserts', []))
    );
  }

  /*   POSTs   */

  postEntree(entree: Food): Observable<Food> {
    return this.http.post<Food>(apiMenuUrl, entree, httpOptions).pipe(
      catchError(this.handleError<Food>('postEntree'))
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
