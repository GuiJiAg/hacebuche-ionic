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

  /*----------   GETs   ----------*/
  getEntrees(): Observable<Food[]> {
    return this.http.get<Food[]>(`${apiMenuUrl}/entrees`)
      .pipe(
        catchError(this.handleError<Food[]>('getEntrees', []))
    );
  }

  getEntree(id): Observable<Food> {
    return this.http.get<Food>(`${apiMenuUrl}/entrees/${id}`)
      .pipe(
        catchError(this.handleError<Food>('getEntree'))
    );
  }

  getToasts(): Observable<Food[]> {
    return this.http.get<Food[]>(`${apiMenuUrl}/toasts`)
      .pipe(
        catchError(this.handleError<Food[]>('getToasts', []))
    );
  }

  getToast(id): Observable<Food> {
    return this.http.get<Food>(`${apiMenuUrl}/toasts/${id}`)
      .pipe(
        catchError(this.handleError<Food>('getToast'))
    );
  }

  getSalads(): Observable<Food[]> {
    return this.http.get<Food[]>(`${apiMenuUrl}/salads`)
      .pipe(
        catchError(this.handleError<Food[]>('getSalads', []))
    );
  }

  getSalad(id): Observable<Food> {
    return this.http.get<Food>(`${apiMenuUrl}/salads/${id}`)
      .pipe(
        catchError(this.handleError<Food>('getSalad'))
    );
  }

  getPastas(): Observable<Food[]> {
    return this.http.get<Food[]>(`${apiMenuUrl}/pastas`)
      .pipe(
        catchError(this.handleError<Food[]>('getPastas', []))
    );
  }

  getPasta(id): Observable<Food> {
    return this.http.get<Food>(`${apiMenuUrl}/pastas/${id}`)
      .pipe(
        catchError(this.handleError<Food>('getPasta'))
    );
  }

  getScrambleds(): Observable<Food[]> {
    return this.http.get<Food[]>(`${apiMenuUrl}/scrambleds`)
      .pipe(
        catchError(this.handleError<Food[]>('getScrambleds', []))
    );
  }

  getScrambled(id): Observable<Food> {
    return this.http.get<Food>(`${apiMenuUrl}/scrambleds/${id}`)
      .pipe(
        catchError(this.handleError<Food>('getScrambled'))
    );
  }

  getFishs(): Observable<Food[]> {
    return this.http.get<Food[]>(`${apiMenuUrl}/fishs`)
      .pipe(
        catchError(this.handleError<Food[]>('getFishs', []))
    );
  }

  getFish(id): Observable<Food> {
    return this.http.get<Food>(`${apiMenuUrl}/fishs/${id}`)
      .pipe(
        catchError(this.handleError<Food>('getFish'))
    );
  }

  getMeats(): Observable<Food[]> {
    return this.http.get<Food[]>(`${apiMenuUrl}/meats`)
      .pipe(
        catchError(this.handleError<Food[]>('getMeats', []))
    );
  }

  getMeat(id): Observable<Food> {
    return this.http.get<Food>(`${apiMenuUrl}/meats/${id}`)
      .pipe(
        catchError(this.handleError<Food>('getMeat'))
    );
  }

  getDesserts(): Observable<Food[]> {
    return this.http.get<Food[]>(`${apiMenuUrl}/desserts`)
      .pipe(
        catchError(this.handleError<Food[]>('getDesserts', []))
    );
  }

  getDessert(id): Observable<Food> {
    return this.http.get<Food>(`${apiMenuUrl}/desserts/${id}`)
      .pipe(
        catchError(this.handleError<Food>('getDessert'))
    );
  }

  /*----------   POSTs   ----------*/

  postEntree(entree: Food): Observable<Food> {
    return this.http.post<Food>(`${apiMenuUrl}/entrees`, entree, httpOptions).pipe(
      catchError(this.handleError<Food>('postEntree'))
    );
  }

  postToast(toast: Food): Observable<Food> {
    return this.http.post<Food>(`${apiMenuUrl}/toasts`, toast, httpOptions).pipe(
      catchError(this.handleError<Food>('postToast'))
    );
  }

  postSalad(salad: Food): Observable<Food> {
    return this.http.post<Food>(`${apiMenuUrl}/salads`, salad, httpOptions).pipe(
      catchError(this.handleError<Food>('postSalad'))
    );
  }

  postPasta(pasta: Food): Observable<Food> {
    return this.http.post<Food>(`${apiMenuUrl}/pastas`, pasta, httpOptions).pipe(
      catchError(this.handleError<Food>('postPasta'))
    );
  }

  postScrambled(scrambled: Food): Observable<Food> {
    return this.http.post<Food>(`${apiMenuUrl}/scrambleds`, scrambled, httpOptions).pipe(
      catchError(this.handleError<Food>('postScrambled'))
    );
  }

  postFish(fish: Food): Observable<Food> {
    return this.http.post<Food>(`${apiMenuUrl}/fishs`, fish, httpOptions).pipe(
      catchError(this.handleError<Food>('postFish'))
    );
  }

  postMeat(meat: Food): Observable<Food> {
    return this.http.post<Food>(`${apiMenuUrl}/meats`, meat, httpOptions).pipe(
      catchError(this.handleError<Food>('postMeat'))
    );
  }

  postDessert(dessert: Food): Observable<Food> {
    return this.http.post<Food>(`${apiMenuUrl}/desserts`, dessert, httpOptions).pipe(
      catchError(this.handleError<Food>('postDessert'))
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
