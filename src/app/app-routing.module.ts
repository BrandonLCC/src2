import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'first-page',  // mostramos como pagina principal en vez de home al recargar o entrar a la
    pathMatch: 'full'
  },
  {
    path: 'second-page',
    loadChildren: () => import('./second-page/second-page.module').then( m => m.SecondPagePageModule)
  },
  {
    path: 'first-page',
    loadChildren: () => import('./first-page/first-page.module').then( m => m.FirstPagePageModule)
  },
  {
    path: 'third-page',
    loadChildren: () => import('./third-page/third-page.module').then( m => m.ThirdPagePageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
