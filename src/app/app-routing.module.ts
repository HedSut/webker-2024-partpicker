import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/services/authGuard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/picker',
    pathMatch: 'full'
  },
  { 
    path: 'parts', 
    loadChildren: () => import('./pages/parts/parts.module').then(m => m.PartsModule) 
  },
  { 
    path: 'not-found', 
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) 
  },
  { 
    path: 'picker', 
    loadChildren: () => import('./pages/picker/picker.module').then(m => m.PickerModule) 
  },
  { 
    path: 'register', 
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'account', 
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule),
    canActivate: [authGuard]
  },
  {
    path: 'comparer', 
    loadChildren: () => import('./pages/comparer/comparer.module').then(m => m.ComparerModule), 
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: '/not-found'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
