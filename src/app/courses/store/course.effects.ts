import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as courseActions from "./course.actions";
import {CoursesHttpService} from "../services/courses-http.service";
import {concatMap, map} from "rxjs/operators";

@Injectable()
export class CourseEffects {
  constructor(private actions$: Actions, private courseService: CoursesHttpService) { }

  loadCourses$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(courseActions.loadAllCoursesAction),
        concatMap(action => this.courseService.findAllCourses()),
        map(courses => courseActions.allCoursesLoadedAction({courses}))
      )
  );
}
