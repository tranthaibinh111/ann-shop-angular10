import { NgModule, Type } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { RootComponent } from './components/root/root.component';

// Pages
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

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
      },
      {
          path: '**',
          component: PageNotFoundComponent
      }
  ];
}

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: makeRoutes(PageHomeComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
