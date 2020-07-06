export interface MenuItem {
  path: string;
  title: string;
  icon: string;
  class: string;
  extralink: boolean;
  label: string;
  labelClass: string;
  submenu: MenuItem[];
}
