import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'addproject',
    loadChildren: () => import('./addproject/addproject.module').then(m => m.AddprojectPageModule)
  },
  {
    path: 'toolbroke',
    loadChildren: () => import('./toolbroke/toolbroke.module').then(m => m.ToolbrokePageModule)
  },
  {
    path: 'myrecords',
    loadChildren: () => import('./myrecords/myrecords.module').then(m => m.MyrecordsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
