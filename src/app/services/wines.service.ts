import { Injectable } from '@angular/core';
import { Wine } from '../models/wine';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const apiWinesUrl = 'https://hacebuche-api.herokuapp.com/api/wines';
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
export class WinesService {

  constructor(private http: HttpClient) { }

  /*----------   GETs   ----------*/
  getAndalusianWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(`${apiWinesUrl}/andalusianWines`)
      .pipe(
        catchError(this.handleError<Wine[]>('getAndalusianWines', []))
    );
  }

  getAndalusianWine(id): Observable<Wine> {
    return this.http.get<Wine>(`${apiWinesUrl}/andalusianWines/${id}`)
      .pipe(
        catchError(this.handleError<Wine>('getAndalusianWine'))
    );
  }

  getRiojaWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(`${apiWinesUrl}/RiojaWines`)
      .pipe(
        catchError(this.handleError<Wine[]>('getRiojaWines', []))
    );
  }

  getRiojaWine(id): Observable<Wine> {
    return this.http.get<Wine>(`${apiWinesUrl}/RiojaWines/${id}`)
      .pipe(
        catchError(this.handleError<Wine>('getRiojaWine'))
    );
  }

  getRiberaWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(`${apiWinesUrl}/RiberaWines`)
      .pipe(
        catchError(this.handleError<Wine[]>('getRiberaWines', []))
    );
  }

  getRiberaWine(id): Observable<Wine> {
    return this.http.get<Wine>(`${apiWinesUrl}/RiberaWines/${id}`)
      .pipe(
        catchError(this.handleError<Wine>('getRiberaWine'))
    );
  }

  getCastillaWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(`${apiWinesUrl}/CastillaWines`)
      .pipe(
        catchError(this.handleError<Wine[]>('getCastillaWines', []))
    );
  }

  getCastillaWine(id): Observable<Wine> {
    return this.http.get<Wine>(`${apiWinesUrl}/CastillaWines/${id}`)
      .pipe(
        catchError(this.handleError<Wine>('getCastillaWine'))
    );
  }

  getAlbarinios(): Observable<Wine[]> {
    return this.http.get<Wine[]>(`${apiWinesUrl}/albarinios`)
      .pipe(
        catchError(this.handleError<Wine[]>('getAlbarinios', []))
    );
  }

  getAlbarinio(id): Observable<Wine> {
    return this.http.get<Wine>(`${apiWinesUrl}/albarinios/${id}`)
      .pipe(
        catchError(this.handleError<Wine>('getAlbarinio'))
    );
  }

  getRuedaWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(`${apiWinesUrl}/ruedaWines`)
      .pipe(
        catchError(this.handleError<Wine[]>('getRuedaWines', []))
    );
  }

  getRuedaWine(id): Observable<Wine> {
    return this.http.get<Wine>(`${apiWinesUrl}/ruedaWines/${id}`)
      .pipe(
        catchError(this.handleError<Wine>('getRuedaWine'))
    );
  }

  getOlorosos(): Observable<Wine[]> {
    return this.http.get<Wine[]>(`${apiWinesUrl}/olorosos`)
      .pipe(
        catchError(this.handleError<Wine[]>('getOlorosos', []))
    );
  }

  getOloroso(id): Observable<Wine> {
    return this.http.get<Wine>(`${apiWinesUrl}/olorosos/${id}`)
      .pipe(
        catchError(this.handleError<Wine>('getOloroso'))
    );
  }

  /*----------   POSTs   ----------*/

  postAndalusianWine(andalusianWine: Wine): Observable<Wine> {
    return this.http.post<Wine>(`${apiWinesUrl}/andalusianWines`, andalusianWine, httpOptions).pipe(
      catchError(this.handleError<Wine>('postAndalusianWine'))
    );
  }

  postRiojaWine(riojaWine: Wine): Observable<Wine> {
    return this.http.post<Wine>(`${apiWinesUrl}/RiojaWines`, riojaWine, httpOptions).pipe(
      catchError(this.handleError<Wine>('postRiojaWine'))
    );
  }

  postRiberaWine(riberaWine: Wine): Observable<Wine> {
    return this.http.post<Wine>(`${apiWinesUrl}/RiberaWines`, riberaWine, httpOptions).pipe(
      catchError(this.handleError<Wine>('postRiberaWine'))
    );
  }

  postCastillaWine(castillaWine: Wine): Observable<Wine> {
    return this.http.post<Wine>(`${apiWinesUrl}/CastillaWines`, castillaWine, httpOptions).pipe(
      catchError(this.handleError<Wine>('postCastillaWine'))
    );
  }

  postAlbarinio(albarinio: Wine): Observable<Wine> {
    return this.http.post<Wine>(`${apiWinesUrl}/albarinios`, albarinio, httpOptions).pipe(
      catchError(this.handleError<Wine>('postAlbarinio'))
    );
  }

  postRuedaWine(ruedaWine: Wine): Observable<Wine> {
    return this.http.post<Wine>(`${apiWinesUrl}/ruedaWines`, ruedaWine, httpOptions).pipe(
      catchError(this.handleError<Wine>('postRuedaWine'))
    );
  }

  postOloroso(oloroso: Wine): Observable<Wine> {
    return this.http.post<Wine>(`${apiWinesUrl}/olorosos`, oloroso, httpOptions).pipe(
      catchError(this.handleError<Wine>('postOloroso'))
    );
  }

  /*----------   PUTs   ----------*/

  putAndalusianWine(andalusianWine: Wine, id): Observable<Wine> {
    return this.http.put<Wine>(`${apiWinesUrl}/andalusianWines/${id}`, andalusianWine, httpOptions).pipe(
      catchError(this.handleError<Wine>('putAndalusianWine'))
    );
  }

  putRiojaWine(riojaWine: Wine, id): Observable<Wine> {
    return this.http.put<Wine>(`${apiWinesUrl}/RiojaWines/${id}`, riojaWine, httpOptions).pipe(
      catchError(this.handleError<Wine>('putRiojaWine'))
    );
  }

  putRiberaWine(riberaWine: Wine, id): Observable<Wine> {
    return this.http.put<Wine>(`${apiWinesUrl}/RiberaWines/${id}`, riberaWine, httpOptions).pipe(
      catchError(this.handleError<Wine>('putRiberaWine'))
    );
  }

  putCastillaWine(castillaWine: Wine, id): Observable<Wine> {
    return this.http.put<Wine>(`${apiWinesUrl}/CastillaWines/${id}`, castillaWine, httpOptions).pipe(
      catchError(this.handleError<Wine>('putCastillaWine'))
    );
  }

  putAlbarinio(albarinio: Wine, id): Observable<Wine> {
    return this.http.put<Wine>(`${apiWinesUrl}/albarinios/${id}`, albarinio, httpOptions).pipe(
      catchError(this.handleError<Wine>('putAlbarinio'))
    );
  }

  putRuedaWine(ruedaWine: Wine, id): Observable<Wine> {
    return this.http.put<Wine>(`${apiWinesUrl}/ruedaWines/${id}`, ruedaWine, httpOptions).pipe(
      catchError(this.handleError<Wine>('putRuedaWine'))
    );
  }

  putOloroso(oloroso: Wine, id): Observable<Wine> {
    return this.http.put<Wine>(`${apiWinesUrl}/olorosos/${id}`, oloroso, httpOptions).pipe(
      catchError(this.handleError<Wine>('putOloroso'))
    );
  }

  /*----------   DELETEs   ----------*/

  deleteAndalusianWine(id): Observable<Wine> {
    return this.http.delete<Wine>(`${apiWinesUrl}/andalusianWines/${id}`, httpOptions).pipe(
      catchError(this.handleError<Wine>('deleteAndalusianWine'))
    );
  }

  deleteRiojaWine(id): Observable<Wine> {
    return this.http.delete<Wine>(`${apiWinesUrl}/RiojaWines/${id}`, httpOptions).pipe(
      catchError(this.handleError<Wine>('deleteRiojaWine'))
    );
  }

  deleteRiberaWine(id): Observable<Wine> {
    return this.http.delete<Wine>(`${apiWinesUrl}/RiberaWines/${id}`, httpOptions).pipe(
      catchError(this.handleError<Wine>('deleteRiberaWine'))
    );
  }

  deleteCastillaWine(id): Observable<Wine> {
    return this.http.delete<Wine>(`${apiWinesUrl}/CastillaWines/${id}`, httpOptions).pipe(
      catchError(this.handleError<Wine>('deleteCastillaWine'))
    );
  }

  deleteAlbarinio(id): Observable<Wine> {
    return this.http.delete<Wine>(`${apiWinesUrl}/albarinios/${id}`, httpOptions).pipe(
      catchError(this.handleError<Wine>('deleteAlbarinio'))
    );
  }

  deleteRuedaWine(id): Observable<Wine> {
    return this.http.delete<Wine>(`${apiWinesUrl}/ruedaWines/${id}`, httpOptions).pipe(
      catchError(this.handleError<Wine>('deleteRuedaWine'))
    );
  }

  deleteOloroso(id): Observable<Wine> {
    return this.http.delete<Wine>(`${apiWinesUrl}/olorosos/${id}`, httpOptions).pipe(
      catchError(this.handleError<Wine>('deleteOloroso'))
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
