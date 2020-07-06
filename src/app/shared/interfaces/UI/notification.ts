export enum NotifBtn {
  Danger = 'btn-danger',
  Success = 'btn-success',
  Info = 'btn-info',
  Primary = 'btn-primary'
}

export enum NotifIcon {
  Link = 'ti-link',
  Calender = 'ti-calendar',
  Setting = 'ti-settings',
  User = 'ti-user'
}

export interface Notification {
  btn: NotifBtn,
  icon: NotifIcon,
  title: string,
  subject: string,
  time: string
}
