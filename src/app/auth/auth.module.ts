import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from './auth.guard'
@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature(
      fromAuth.authFeatureKey, 
      fromAuth.authReducer
    )
  ]
})
export class AuthModule { 
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        AuthGuard,
        AuthService
      ]
    }
  }
}
