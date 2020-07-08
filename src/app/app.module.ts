import { NgModule } from '@angular/core';

// modules (angular)
import { BrowserModule } from '@angular/platform-browser';

// modules (third-party)
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// https://www.npmjs.com/package/ngx-perfect-scrollbar#installing-and-usage
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

// modules
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './modules/header/header.module';
import { MenuModule } from './modules/menu/menu.module';
import { SharedModule } from './shared/shared.module';

// components
import { AppComponent } from './app.component';
import { RootComponent } from './components/root/root.component';

// Pages
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

// https://www.npmjs.com/package/ngx-perfect-scrollbar#installing-and-usage
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    // pages
    PageHomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    // modules (angular)
    BrowserModule,
    // modules (third-party)
    NgbModule,
    // https://www.npmjs.com/package/ngx-perfect-scrollbar#installing-and-usage
    PerfectScrollbarModule,
    // modules
    AppRoutingModule,
    HeaderModule,
    MenuModule,
    SharedModule
  ],
  providers: [
    // https://www.npmjs.com/package/ngx-perfect-scrollbar#installing-and-usage
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
