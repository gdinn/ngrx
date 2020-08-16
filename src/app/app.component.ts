import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './reducers/index';
import { AuthActions } from './auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx';
  constructor(
    private store: Store<AppState>
  ){

  }

  ngOnInit(){
    const userProfile = localStorage.getItem("user")
    if(userProfile){
      this.store.dispatch(AuthActions.login({
        user: JSON.parse(userProfile)
      }))
    }
  }
}
