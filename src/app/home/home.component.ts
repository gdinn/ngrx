import { Component, OnInit } from '@angular/core';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { AuthActions } from '../auth/auth.actions';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isLoggedIn, isLoggedOut } from '../auth/auth.selectors'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoggedIn$: Observable<boolean>
  isLoggedOut$: Observable<boolean>

  constructor(
    private store: Store<AppState>,
    private router: Router   
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedIn)
    )
    this.isLoggedOut$ = this.store.pipe(
      select(isLoggedOut)
    )    
  }

  logout(){
    this.store.dispatch(AuthActions.logout())
  }

  login(){
    this.router.navigateByUrl("/auth/login")
  }  

}
