import {ActionReducer, ActionReducerMap, MetaReducer} from "@ngrx/store";
import {environment} from "../../environments/environment";

export interface AppState {
}

export const reducers: ActionReducerMap<AppState> = {
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
