import { Component, OnInit, Input } from '@angular/core';

// Enum
import { BackgroundType, SideBarType } from '../../shared/interfaces/UI/options';

// Interfaces
import { Config } from '../../shared/interfaces/UI/config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() config: Config;

  constructor() { }

  ngOnInit(): void {
  }

  get navBarBgClass(): string {
    return (this.config.options.navbarbg == BackgroundType.Skin6)? 'navbar-light' : 'navbar-dark';
  }

  toggleSidebarType(): void {
    switch (this.config.options.sidebartype) {
      case SideBarType.Full:
      case SideBarType.IconBar:
        this.config.options.sidebartype = SideBarType.MiniSidebar;
        break;

      case SideBarType.Overlay:
        this.config.showMobileMenu = !this.config.showMobileMenu;
        break;

      case SideBarType.MiniSidebar:
        if (this.config.defaultSidebar === SideBarType.MiniSidebar) {
          this.config.options.sidebartype = SideBarType.Full;
        } else {
          this.config.options.sidebartype = this.config.defaultSidebar;
        }
        break;

      default:
    }
  }
}
