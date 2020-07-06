import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Enum
import { BackgroundType, BoxedType, DirectionType, PositionType, SideBarType, ThemeType } from '../../shared/interfaces/UI/options';

// Interfaces
import { Config } from '../../shared/interfaces/UI/config';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  public innerWidth: any;
  public config: Config = {
    isCollapsed: false,
    defaultSidebar: SideBarType.Full,
    showMobileMenu: false,
    expandLogo: false,
    options: {
      theme: ThemeType.Light, // two possible values: light, dark
      dir: DirectionType.LTR, // two possible values: ltr, rtl
      layout: 'vertical', // fixed value. shouldn't be changed.
      sidebartype: SideBarType.Full, // four possible values: full, iconbar, overlay, mini-sidebar
      sidebarpos: PositionType.Fixed, // two possible values: fixed, absolute
      headerpos: PositionType.Fixed, // two possible values: fixed, absolute
      boxed: BoxedType.Full, // two possible values: full, boxed
      navbarbg: BackgroundType.Skin6, // six possible values: skin(1/2/3/4/5/6)
      sidebarbg: BackgroundType.Skin5, // six possible values: skin(1/2/3/4/5/6)
      logobg: BackgroundType.Skin5 // six possible values: skin(1/2/3/4/5/6)
    }
  };

  constructor(public router: Router) { }

  ngOnInit(): void {
    if (this.router.url === '/') {
      this.router.navigate(['/dashboard/classic']);
    }
    this.handleSidebar();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.handleSidebar();
  }

  handleSidebar(): void {
    this.innerWidth = window.innerWidth;
    switch (this.config.defaultSidebar) {
      case SideBarType.Full:
      case SideBarType.IconBar:
        if (this.innerWidth < 1170) {
          this.config.options.sidebartype = SideBarType.MiniSidebar;
        } else {
          this.config.options.sidebartype = this.config.defaultSidebar;
        }
        break;

      case SideBarType.Overlay:
        if (this.innerWidth < 767) {
          this.config.options.sidebartype = SideBarType.MiniSidebar;
        } else {
          this.config.options.sidebartype = this.config.defaultSidebar;
        }
        break;

      default:
    }
  }

  Logo() {
    this.config.expandLogo = !this.config.expandLogo;
  }
}
