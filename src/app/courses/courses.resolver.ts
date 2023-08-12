import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../store/app.reducer";
import {filter, finalize, first, tap} from "rxjs/operators";
import * as CourseActions from './store/course.actions';
import {selectAreCoursesLoaded} from "./store/course.selectors";

@Injectable()
export class CoursesResolver implements Resolve<any> {
  loading = false;
  constructor(private store:Store<AppState>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store
      .pipe(
        select(selectAreCoursesLoaded),
        tap(courseLoaded => {
          if(!this.loading && !courseLoaded) {
            this.loading = true;
            this.store.dispatch(CourseActions.loadAllCoursesAction());
          }
        }),
        filter(courseLoaded => courseLoaded),
        first(),
        finalize(() => this.loading = false)
      );
  }
}
