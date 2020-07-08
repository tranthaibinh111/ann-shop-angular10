import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';

// modules
import { AccountRoutingModule } from './account-routing.module';

// components
import { LayoutComponent } from './components/layout/layout.component';

// pages
import { PageLoginComponent } from './pages/page-login/page-login.component';


@NgModule({
  declarations: [
    // components
    LayoutComponent,
    // pages
    PageLoginComponent
  ],
  imports: [
    // modules (angular)
    CommonModule,
    // modules
    AccountRoutingModule
  ]
})
export class AccountModule { }
