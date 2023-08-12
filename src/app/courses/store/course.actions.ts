import {createAction, props} from "@ngrx/store";
import {Course} from "../model/course";
import {Update} from "@ngrx/entity";

enum CourseActionTypes {
  LOAD_ALL        = '[Course] LOAD_ALL',
  LOADED          = '[Course] LOADED',
  COURSE_UPDATED  = '[Course] COURSE_UPDATED'
}

export const loadAllCoursesAction = createAction(
  CourseActionTypes.LOAD_ALL
);

export const allCoursesLoadedAction = createAction(
  CourseActionTypes.LOADED,
  props<{courses: Course[]}>()
);

export const courseUpdatedAction = createAction(
  CourseActionTypes.COURSE_UPDATED,
  props<{update: Update<Course>}>()
);
