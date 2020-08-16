import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';


const routes: Routes = [
  { 
    path: '', redirectTo: 'auth', pathMatch: 'full' 
  },
  { 
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [AuthGuard]
  }, 
  { 
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
