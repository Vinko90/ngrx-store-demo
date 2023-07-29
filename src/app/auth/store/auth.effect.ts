import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as AuthActions from "./auth.action";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable()
export class AuthEffect {
  constructor(private actions$: Actions, private router: Router) { }

  login$ = createEffect(() => this.actions$.pipe(ofType(AuthActions.loginAction),
    tap(action => localStorage.setItem('user', JSON.stringify(action.user)))
  ), {dispatch: false});

  logout$ = createEffect(() => this.actions$.pipe(ofType(AuthActions.logoutAction),
    tap(action => {
      localStorage.removeItem('user');
      this.router.navigateByUrl('/login');
    })), {dispatch: false});
}
