import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";

import * as authSelectors from "./store/auth.selector";
import {AuthState} from "./store/auth.reducer";
import {tap} from "rxjs/operators";

@Injectable()
export class AuthGuard implements  CanActivate {
  constructor(private store: Store<AuthState>, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(select(authSelectors.selectIsLoggedIn), tap(loggedIn => {
      if(!loggedIn) {
        this.router.navigateByUrl('/login');
      }
    }));
  }
}
