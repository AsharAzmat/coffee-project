import { routerReducer } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";
import { coffeeReducer, CoffeeState } from "./Reducers/coffee.reducers";


export const reducers: ActionReducerMap<CoffeeState> = {
  coffees: coffeeReducer,
  router: routerReducer,
}
