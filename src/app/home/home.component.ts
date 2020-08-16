import { Component, OnInit } from '@angular/core';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { AuthActions } from '../auth/auth.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private store: Store<AppState>    
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.store.dispatch(AuthActions.logout())
  }

}
