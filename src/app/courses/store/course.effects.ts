import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as courseActions from "./course.actions";
import {CoursesHttpService} from "../services/courses-http.service";
import {concatMap, map} from "rxjs/operators";

@Injectable()
export class CourseEffects {
  constructor(private actions$: Actions, private courseSrv: CoursesHttpService) { }

  loadCourses$ = createEffect(() => this.actions$.pipe(ofType(courseActions.loadAllCoursesAction),
        concatMap(() => this.courseSrv.findAllCourses()),
        map(courses => courseActions.allCoursesLoadedAction({courses}))
      )
  );

  saveCourse$ = createEffect(() => this.actions$.pipe(ofType(courseActions.courseUpdatedAction),
        concatMap(action => this.courseSrv.saveCourse(action.update.id, action.update.changes))
      ),
    { dispatch: false }
  );
}
