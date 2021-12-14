import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Coffee } from '../Models/coffee';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private coffeeUrl = 'https://random-data-api.com/api/coffee/random_coffee?size=50';
  constructor(private http: HttpClient) {

    console.log("coffee is :", this.getCoffees());
  }

  getCoffees(): Observable<ReadonlyArray<Coffee>> {
    return this.http.get<ReadonlyArray<Coffee>>(this.coffeeUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

}
