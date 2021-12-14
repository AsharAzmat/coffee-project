import { createAction, props } from '@ngrx/store';
import { Coffee } from 'src/app/Models/coffee';

export const getCoffees = createAction('[Coffee] Get coffee');
export const getCoffeesSuccess = createAction(
  '[Coffee] Get coffee success',
(coffees: ReadonlyArray<Coffee>) => ({ coffees })
);
