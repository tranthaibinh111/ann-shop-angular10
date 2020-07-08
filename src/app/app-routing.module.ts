import { NgModule, Type } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { RootComponent } from './components/root/root.component';

// pages
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

// gaurd
import { AuthGuard } from './shared/guards/auth.guard';

export function makeRoutes(homeComponent: Type<any>): Routes {
  return [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    },
    {
      path: 'home',
      component: homeComponent
    }
  ];
}

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: RootComponent,
    children: makeRoutes(PageHomeComponent)
  },
  {
    path: 'account',
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
      }
    ]
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
