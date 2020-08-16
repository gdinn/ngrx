import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from '../auth/reducers'
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forFeature(
      fromAuth.authFeatureKey, 
      fromAuth.authReducer
    ),
    MatButtonModule
  ],
  exports: [
    MatButtonModule
  ]
})
export class HomeModule { }
