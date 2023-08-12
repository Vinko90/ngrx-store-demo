import {Injectable} from "@angular/core";
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from "@ngrx/data";
import {Lesson} from "../model/lesson";
import {lessonEntityName} from "../store/course.entities";

@Injectable()
export class LessonEntityService extends EntityCollectionServiceBase<Lesson>{
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(lessonEntityName, serviceElementsFactory);
  }
}
