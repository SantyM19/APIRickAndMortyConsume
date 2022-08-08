import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Character as ModelC } from '../models/Character';
import { Episode as Model } from '../models/Episode';
import { Info } from '../models/Info';

import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class Service {
  private apiUrl = `${environment.API_URL}/episode`;
  private apiUrlCharacters = `${environment.API_URL}/character`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /** GET model from the server */
  getAllModels(): Observable<Info> {
    return this.http.get<Info>(this.apiUrl).pipe(
      tap((_) => this.log('fetched episode')),
      catchError(this.handleError<Info>('get episodes'))
    );
  }

  /** GET model from the server */
  getAllModelsCharacter(): Observable<Info> {
    return this.http.get<Info>(this.apiUrlCharacters).pipe(
      tap((_) => this.log('fetched character')),
      catchError(this.handleError<Info>('get characters'))
    );
  }
  /** GET model from the server */
  getAllModelsCharacterBy(ruta: string): Observable<Info> {
    return this.http.get<Info>(ruta).pipe(
      tap((_) => this.log('fetched character')),
      catchError(this.handleError<Info>('get characters'))
    );
  }

  /** GET model by id. Will 404 if id not found */
  getModel(url: string): Observable<ModelC> {
    return this.http.get<ModelC>(url).pipe(
      tap((_) => this.log(`fetched model id`)),
      catchError(this.handleError<ModelC>(`getModel id`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ModelService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ProyectService: ${message}`);
  }
}
