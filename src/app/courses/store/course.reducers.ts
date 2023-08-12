import * as CourseActions from './course.actions';
import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {compareCourses, Course} from "../model/course";
import {createReducer, on} from "@ngrx/store";

export const courseFeatureKey = 'course';

export interface CourseState extends EntityState<Course> {
  allCoursesLoaded: boolean
}

export const adapter = createEntityAdapter<Course>({
  sortComparer: compareCourses,
  selectId: course => course.id // Only needed if your model PK is not called Id
});

export const { selectAll } = adapter.getSelectors();

export const initialCourseState = adapter.getInitialState({
  allCoursesLoaded: false
});

export const courseReducer = createReducer(

  initialCourseState,

  on(CourseActions.allCoursesLoadedAction,
    (state, action) => adapter.setAll(action.courses, { ...state, allCoursesLoaded: true })),

  on(CourseActions.courseUpdatedAction,
    (state, action) => adapter.updateOne(action.update, state))

);
