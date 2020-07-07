import { createAction, props } from '@ngrx/store'
import { UserModel } from './models/user.model'

export const login = createAction(
  "[Auth Module] User Login",
  props<{user: UserModel}>()
)