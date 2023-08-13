import {ActionReducer, ActionReducerMap, MetaReducer} from "@ngrx/store";
import {environment} from "../../environments/environment";
import {routerReducer} from "@ngrx/router-store";

export interface AppState {
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

//Demo Meta-Reducers method
export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log("State Before: ", state);
    console.log("Action: ", action);
    return reducer(state, action);
  }
}

export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [logger] : [];
