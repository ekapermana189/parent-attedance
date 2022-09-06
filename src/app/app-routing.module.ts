import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { IntroGuard } from './guards/intro.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'userdetails',
    loadChildren: () => import('./userdetails/userdetails.module').then( m => m.UserdetailsPageModule)
  },
  {
    path: 'detail-attedance',
    loadChildren: () => import('./detail-attedance/detail-attedance.module').then( m => m.DetailAttedancePageModule)
  },
  {
    path: 'menu-all',
    loadChildren: () => import('./menu-all/menu-all.module').then( m => m.MenuAllPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canLoad:[IntroGuard]
    // AutoLoginGuard
  },
  {
    path: 'notifikasi',
    loadChildren: () => import('./notifikasi/notifikasi.module').then( m => m.NotifikasiPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'myprofile',
    loadChildren: () => import('./myprofile/myprofile.module').then( m => m.MyprofilePageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'absensiku',
    loadChildren: () => import('./absensiku/absensiku.module').then( m => m.AbsensikuPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'daily-history',
    loadChildren: () => import('./daily-history/daily-history.module').then( m => m.DailyHistoryPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'search-history',
    loadChildren: () => import('./search-history/search-history.module').then( m => m.SearchHistoryPageModule)
  },
  {
    path: 'view-student',
    loadChildren: () => import('./view-student/view-student.module').then( m => m.ViewStudentPageModule)
  },
  {
    path: 'create-student',
    loadChildren: () => import('./create-student/create-student.module').then( m => m.CreateStudentPageModule)
  },
  {
    path: 'edit-student',
    loadChildren: () => import('./edit-student/edit-student.module').then( m => m.EditStudentPageModule)
  },
  {
    path: 'profile-student',
    loadChildren: () => import('./profile-student/profile-student.module').then( m => m.ProfileStudentPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
