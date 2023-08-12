import {EntityMetadataMap} from "@ngrx/data";
import {compareCourses} from "../model/course";

export const courseEntityName: string = 'Course';

//Define all the entities
export const entityMetadata: EntityMetadataMap = {
  Course: {
    sortComparer: compareCourses
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
