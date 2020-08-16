import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { UserModel } from '../models/user.model';
import { AuthActions } from '../auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: UserModel
}

export const initialAuthState: AuthState = {
  user: undefined
}

export const authReducer = createReducer(
  initialAuthState,
  on(
    AuthActions.login, (state, action) => {
      return {
        user: action.user
      }
    }   
  ),
  on(
    AuthActions.logout, () => {
      return {
        user: undefined
      }
    }
  )
)