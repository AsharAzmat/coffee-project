import { createSelector } from "@ngrx/store";
import { Coffee } from "src/app/Models/coffee";
import { CoffeeState } from "../Reducers/coffee.reducers";


export const coffeeSelector = createSelector(
  (state: CoffeeState) => state.coffees,
  (coffees: ReadonlyArray<Coffee>) => coffees
);

const routeParams = createSelector(
  (state: CoffeeState) => state.router.state,
  (state: { params: any; }) => state.params
);

export const coffee = createSelector(
  coffeeSelector,
  routeParams,
  (coffees: ReadonlyArray<Coffee>, { id }) => {
    return coffees.filter((c) => c.id === Number(id))[0];
  }
);
