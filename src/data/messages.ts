import { MsgStatus, Message } from '../app/shared/interfaces/UI/message';

export const MESSAGE: Message[] = [
  {
    useravatar: 'assets/images/users/1.jpg',
    status: MsgStatus.Online,
    from: 'Pavan kumar',
    subject: 'Just see the my admin!',
    time: '9:30 AM'
  },
  {
    useravatar: 'assets/images/users/2.jpg',
    status: MsgStatus.Busy,
    from: 'Sonu Nigam',
    subject: 'I have sung a song! See you at',
    time: '9:10 AM'
  },
  {
    useravatar: 'assets/images/users/2.jpg',
    status: MsgStatus.Away,
    from: 'Arijit Sinh',
    subject: 'I am a singer!',
    time: '9:08 AM'
  },
  {
    useravatar: 'assets/images/users/4.jpg',
    status: MsgStatus.OffLine,
    from: 'Pavan kumar',
    subject: 'Just see the my admin!',
    time: '9:00 AM'
  }
];
