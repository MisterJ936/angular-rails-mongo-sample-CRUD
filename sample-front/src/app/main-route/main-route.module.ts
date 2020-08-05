import { AuthGuardGuard } from './../guard/auth-guard.guard';
import { Routes } from '@angular/router';

export const  MainRouteModule: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./../pages/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./../users/admin/admin.module').then(mod => mod.AdminModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'regular',
    loadChildren: () => import('./../users/regular/regular.module').then(mod => mod.RegularModule)
  },
  {
    path: '',   redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: () => import('./../pages/notfound/notfound.module').then(mod => mod.NotfoundModule)
  }
];
