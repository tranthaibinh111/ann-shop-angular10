import { SideBarType, Options } from "./options";

export interface Config {
  isCollapsed: boolean,
  defaultSidebar: SideBarType,
  showMobileMenu: boolean,
  expandLogo: boolean,

  options: Options
}
