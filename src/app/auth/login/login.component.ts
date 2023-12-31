import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {AuthService} from "../auth.service";
import {tap} from "rxjs/operators";
import {noop} from "rxjs";
import {Router} from "@angular/router";
import {AuthState} from "../store/auth.reducer";
import {Store} from "@ngrx/store";
import * as AuthActions from "../store/auth.action";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
      private fb:FormBuilder,
      private auth: AuthService,
      private router:Router,
      private authStore: Store<AuthState>) {

      this.form = fb.group({
          email: ['test', [Validators.required]],
          password: ['test', [Validators.required]]
      });
  }

  ngOnInit() { }

  login() {
    const val = this.form.value;
    this.auth.login(val.email, val.password).pipe(
      tap(user => {
        console.log(user);

        this.authStore.dispatch(AuthActions.loginAction({user: user}));

        this.router.navigateByUrl('/courses');
      })
    )
    .subscribe(
      noop,
      () => alert('login failed')
    )
  }

}

