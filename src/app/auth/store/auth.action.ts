import {createAction, props} from "@ngrx/store";
import {User} from "../model/user.model";

enum AuthActionTypes {
  LOGIN   = '[Auth] LOGIN',
  LOGOUT  = '[Auth] LOGOUT'
}

export const loginAction = createAction(
  AuthActionTypes.LOGIN,
  props<{user: User}>()
);

export const logoutAction = createAction(
  AuthActionTypes.LOGOUT
);
