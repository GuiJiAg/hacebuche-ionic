import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'menu',
    loadChildren: './pages/menu/menu.module#MenuPageModule'
  },
  {
    path: 'wines',
    loadChildren: './pages/wines/wines.module#WinesPageModule'
  },
  { 
    path: 'login', 
    loadChildren: './pages/login/login.module#LoginPageModule' 
  },
  { 
    path: 'log-out', 
    loadChildren: './pages/logout/logout.module#LogoutPageModule' 
  },
  { 
    path: 'noLogged', 
    redirectTo: '/login', 
    pathMatch: 'full' 
  },
  { 
    path: 'menu/:param', 
    loadChildren: './pages/menu-insert-update/menu-insert-update.module#MenuInsertUpdatePageModule' 
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
