import { NotifBtn, NotifIcon, Notification } from '../app/shared/interfaces/UI/notification'

export const NOTIFICATION: Notification[] = [
  {
    btn:  NotifBtn.Danger,
    icon: NotifIcon.Link,
    title: 'Luanch Admin',
    subject: 'Just see the my new admin!',
    time: '9:30 AM'
  },
  {
    btn: NotifBtn.Success,
    icon: NotifIcon.Calender,
    title: 'Event today',
    subject: 'Just a reminder that you have event',
    time: '9:10 AM'
  },
  {
    btn: NotifBtn.Info,
    icon: NotifIcon.Setting,
    title: 'Settings',
    subject: 'You can customize this template as you want',
    time: '9:08 AM'
  },
  {
    btn: NotifBtn.Primary,
    icon: NotifIcon.User,
    title: 'Pavan kumar',
    subject: 'Just see the my admin!',
    time: '9:00 AM'
  }
];
