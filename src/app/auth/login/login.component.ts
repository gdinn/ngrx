import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators'
import { noop } from 'rxjs';
import { Router } from '@angular/router';
import { AuthActions } from '../auth.actions'
import { UserModel } from '../models/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: ['igor@igor.com', [Validators.required]],
    password: ['igor', [Validators.required]]
  });
    
  constructor(
    private fb:FormBuilder,
    private router: Router,
    private authService: AuthService,
    private store: Store<AppState>
  ) { 
    
  }

  ngOnInit(): void {
  }

  login() {
    const val = this.loginForm.value;
    this.authService.login(val.email, val.password)
    .pipe(
      tap((user: UserModel) => {
        console.log(user);
        this.store.dispatch(AuthActions.login({user}));
        this.router.navigateByUrl('/home');
      })
    )
    .subscribe(
        noop,
        () => alert('Login Failed')
    );
  }
}
