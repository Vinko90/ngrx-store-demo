import {Injectable} from "@angular/core";
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from "@ngrx/data";
import {Course} from "../model/course";
import {courseEntityName} from "../store/course.entities";

@Injectable()
export class CourseEntityService extends EntityCollectionServiceBase<Course>{
  constructor(srvElementsFactory: EntityCollectionServiceElementsFactory) {
    super(courseEntityName, srvElementsFactory);
  }
}
