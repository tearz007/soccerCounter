import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'start-page',
    pathMatch: 'full'
  },
  {
    path: 'start-page',
    loadChildren: () => import('./pages/startPage/start-page/start-page.module').then( m => m.StartPagePageModule)
  },
  {
    path: 'counter',
    loadChildren: () => import('./pages/counter/counter/counter.module').then( m => m.CounterPageModule)
  },  {
    path: 'stats',
    loadChildren: () => import('./pages/stats/stats/stats.module').then( m => m.StatsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
