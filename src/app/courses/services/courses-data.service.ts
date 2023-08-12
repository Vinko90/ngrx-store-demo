import {Injectable} from "@angular/core";
import {DefaultDataService, HttpUrlGenerator} from "@ngrx/data";
import {Course} from "../model/course";
import {HttpClient} from "@angular/common/http";
import {HttpOptions} from "@ngrx/data/src/dataservices/interfaces";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {courseEntityName} from "../store/course.entities";

@Injectable()
export class CoursesDataService extends DefaultDataService<Course> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super(courseEntityName, http, httpUrlGenerator);
  }

  //Override in case your API does not follow standard patterns for URL
  getAll(options?: HttpOptions): Observable<Course[]> {
    return this.http.get('/api/courses')
      .pipe(map(res => res["payload"]));
  }
}
