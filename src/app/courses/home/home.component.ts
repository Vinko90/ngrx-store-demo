import {Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {Observable} from "rxjs";
import {defaultDialogConfig} from '../shared/default-dialog-config';
import {EditCourseDialogComponent} from '../edit-course-dialog/edit-course-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {CourseState} from "../store/course.reducers";
import {select, Store} from "@ngrx/store";
import * as courseSelectors from "../store/course.selectors";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    promoTotal$: Observable<number>;
    loading$: Observable<boolean>;
    beginnerCourses$: Observable<Course[]>;
    advancedCourses$: Observable<Course[]>;

    constructor(private dialog: MatDialog, private store: Store<CourseState>) { }

    ngOnInit() {
      this.reload();
    }

  reload() {
    this.beginnerCourses$ = this.store.pipe(select(courseSelectors.selectBeginnerCourses));
    this.advancedCourses$ = this.store.pipe(select(courseSelectors.selectAdvancedCourses));
    this.promoTotal$ = this.store.pipe(select(courseSelectors.selectPromoTotal));
  }

  onAddCourse() {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle:"Create Course",
      mode: 'create'
    };

    this.dialog.open(EditCourseDialogComponent, dialogConfig);
  }
}
