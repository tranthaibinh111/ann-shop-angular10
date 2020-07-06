import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';

// modules (third-party)
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// https://www.npmjs.com/package/ngx-perfect-scrollbar#installing-and-usage
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

// components
import { HeaderComponent } from './header.component';
import { NavComponent } from "./components/nav/nav.component";

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
    HeaderComponent,
    NavComponent
  ],
  imports: [
    // modules (angular)
    CommonModule,
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
    HeaderComponent
  ]
})
export class HeaderModule { }
