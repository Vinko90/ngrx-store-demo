import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {AppState} from "./store/app.reducer";
import {Observable} from "rxjs";
import * as authSelectors from "./auth/store/auth.selector";
import * as authActions from "./auth/store/auth.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    loading = true;
    isLoggedIn$: Observable<boolean>;
    isLoggedOut$: Observable<boolean>;

    constructor(private router: Router, private store: Store<AppState>) { }

    ngOnInit() {

      this.router.events.subscribe(event  => {
        switch (true) {
          case event instanceof NavigationStart: {
            this.loading = true;
            break;
          }

          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
            this.loading = false;
            break;
          }
          default: {
            break;
          }
        }
      });

      this.isLoggedIn$ = this.store.pipe(select(authSelectors.selectIsLoggedIn));
      this.isLoggedOut$ = this.store.pipe(select(authSelectors.selectIsLoggedOut));
    }

    logout() {
      this.store.dispatch(authActions.logoutAction());
    }
}
