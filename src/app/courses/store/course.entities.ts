import {EntityMetadataMap} from "@ngrx/data";
import {compareCourses} from "../model/course";
import {compareLessons} from "../model/lesson";

export const courseEntityName: string = 'Course';
export const lessonEntityName: string = 'Lesson';

//Define all the entities
export const entityMetadata: EntityMetadataMap = {
  Course: {
    sortComparer: compareCourses,
    entityDispatcherOptions: {
      optimisticUpdate: true
    }
  },
  Lesson: {
    sortComparer: compareLessons
  }
};

//Define all the plural names if not standard
/*
const pluralNames = {
  Course: 'Courses'
};

//Config
export const entityConfig = {
  entityMetadata,
  pluralNames
};
*/
