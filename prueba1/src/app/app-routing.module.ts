import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate } from './canactivate.guard';
import { CanmatchGuard } from './canmatch.guard';
import { CanDeactivateGuard } from './candeactivate.guard';

const routes: Routes = [
  {
    path: 'home',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: 'pag-inicio',loadChildren: () => import('./pag-inicio/pag-inicio.module').then( m => m.PagInicioPageModule)
  },
  {
    path: 'contra',loadChildren: () => import('./contra/contra.module').then( m => m.ContraPageModule)},
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),   
    canActivate: [canActivate],
    canMatch: [CanmatchGuard],
    canDeactivate: [CanDeactivateGuard]
  },
  
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
