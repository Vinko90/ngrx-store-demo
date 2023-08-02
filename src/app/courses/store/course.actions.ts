import {createAction, props} from "@ngrx/store";
import {Course} from "../model/course";

enum CourseActionTypes {
  LOAD_ALL = '[Course] LOAD_ALL',
  LOADED   = '[Course] LOADED'
}

export const loadAllCoursesAction = createAction(
  CourseActionTypes.LOAD_ALL
);

export const allCoursesLoadedAction = createAction(
  CourseActionTypes.LOADED,
  props<{courses: Course[]}>()
);
