import { createAction, props } from '@ngrx/store'
import { UserModel } from './models/user.model'

const login = createAction(
  "[Login Page] User Login",
  props<{user: UserModel}>()
);

const logout = createAction(
  "[Home Page] Logout"
);

export const AuthActions = {
  login,
  logout
}