import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { LayoutComponent } from './components/layout/layout.component';

// pages
import { PageLoginComponent } from './pages/page-login/page-login.component';

export function makeRoutes(): Routes {
  return [
    {
      path: 'login',
      component: PageLoginComponent
    }
  ];
}

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: makeRoutes()
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
