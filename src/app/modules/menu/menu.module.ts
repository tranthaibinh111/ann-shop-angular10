import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// modules (angular)
import { CommonModule } from '@angular/common';

// modules (third-party)
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// https://www.npmjs.com/package/ngx-perfect-scrollbar#installing-and-usage
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

// components
import { MenuComponent } from './menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// https://www.npmjs.com/package/ngx-perfect-scrollbar#installing-and-usage
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    // components
    MenuComponent,
    SidebarComponent
  ],
  imports: [
    // modules (angular)
    CommonModule,
    RouterModule,
    // modules (third-party)
    NgbModule,
    // https://www.npmjs.com/package/ngx-perfect-scrollbar#installing-and-usage
    PerfectScrollbarModule
  ],
  providers: [
    // https://www.npmjs.com/package/ngx-perfect-scrollbar#installing-and-usage
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports: [
    // components
    MenuComponent
  ]
})
export class MenuModule { }
