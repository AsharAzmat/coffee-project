import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

//fetching URL parameters and setting router state
export interface RouterState {
  url: string;
  params: Params;
  queryParams: Params;
}

//only using the params needed for router state
export class RouterSerializer implements RouterStateSerializer<RouterState> {
  serialize(routerState: RouterStateSnapshot): RouterState {
    let route = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params } = route;
    return { url, params, queryParams };
  }
}
