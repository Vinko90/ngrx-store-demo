import {createReducer, on} from '@ngrx/store';
import {User} from "../model/user.model";

import * as AuthActions from "../store/auth.action";

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User
}

export const initialAuthState: AuthState = {
  user: undefined
}

export const authReducer = createReducer(

  initialAuthState,

  on(AuthActions.loginAction, (_state, action) => ({
    user: action.user
  })),

  on(AuthActions.logoutAction, () => ({
    user: undefined
  }))
);
