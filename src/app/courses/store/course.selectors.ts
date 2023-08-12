import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromCourses from "./course.reducers";

export const selectCourseState = createFeatureSelector<fromCourses.CourseState>(fromCourses.courseFeatureKey);

export const selectAllCourses = createSelector(
  selectCourseState,
  fromCourses.selectAll
);

export const selectBeginnerCourses = createSelector(
  selectAllCourses,
  courses => courses.filter(course => course.category === 'BEGINNER')
);

export const selectAdvancedCourses = createSelector(
  selectAllCourses,
  courses => courses.filter(course => course.category === 'ADVANCED')
);

export const selectPromoTotal = createSelector(
  selectAllCourses,
  courses => courses.filter(course => course.promo).length
);

export const selectAreCoursesLoaded = createSelector(
  selectCourseState,
  state => state.allCoursesLoaded
);
