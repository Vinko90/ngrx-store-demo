import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../store/app.reducer";
import {finalize, first, tap} from "rxjs/operators";
import * as CourseActions from './store/course.actions';

@Injectable()
export class CoursesResolver implements Resolve<any> {
  loading = false;
  constructor(private store:Store<AppState>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store
      .pipe(
        tap(() => {
          if(!this.loading) {
            this.loading = true;
            this.store.dispatch(CourseActions.loadAllCoursesAction());
          }
        }),
        first(),
        finalize(() => this.loading = false)
      );
  }
}
