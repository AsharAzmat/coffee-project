import { RouterReducerState } from '@ngrx/router-store';
import { createReducer, on } from '@ngrx/store';

import { Coffee } from 'src/app/Models/coffee';
import { getCoffees, getCoffeesSuccess } from '../Actions/coffee.action';

export interface CoffeeState {
  coffees: ReadonlyArray<Coffee>;
  router: RouterReducerState<any>;
}

const initialState: ReadonlyArray<Coffee> = [];

export const coffeeReducer = createReducer(
  initialState,
  on(getCoffeesSuccess, (state, { coffees }) => [...coffees]),
  on(getCoffees, (state) => [...state])
);
