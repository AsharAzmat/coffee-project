import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EmptyError } from "rxjs";
import { exhaustMap, catchError, map } from "rxjs/operators";
import { DataService } from "src/app/Service/data.service";
import { getCoffees, getCoffeesSuccess } from "../Actions/coffee.action";


@Injectable()
export class CoffeeEffects {

  loadCoffee$ = createEffect(() =>
  this.action$.pipe(
    ofType(getCoffees),
    exhaustMap(() =>
      this.dataService.getCoffees().pipe(
        map((coffees) => getCoffeesSuccess(coffees))
      )
    )
  )
);

  constructor(private action$: Actions, private dataService: DataService){}
}
