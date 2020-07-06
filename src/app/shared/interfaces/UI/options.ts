export enum BackgroundType {
  Skin1 = 'skin1',
  Skin2 = 'skin2',
  Skin3 = 'skin3',
  Skin4 = 'skin4',
  Skin5 = 'skin5',
  Skin6 = 'skin6'
}

export enum BoxedType {
  Full = 'full',
  Boxed = 'boxed'
}

export enum DirectionType {
  LTR = 'ltr',
  RTL = 'rtl'
}

export enum PositionType {
  Fixed = 'fixed',
  Absolute = 'absolute'
}

export enum SideBarType {
  Full = 'full',
  IconBar = 'iconbar',
  Overlay = 'overlay',
  MiniSidebar = 'mini-sidebar'
}

export enum ThemeType {
  Light = 'light',
  Dark = 'dark'
}

export interface Options {
  theme: ThemeType,
  dir: DirectionType
  layout: string
  sidebartype: SideBarType,
  sidebarpos: PositionType,
  headerpos: PositionType,
  boxed: BoxedType,
  navbarbg: BackgroundType,
  sidebarbg: BackgroundType,
  logobg: BackgroundType
}
