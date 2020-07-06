export enum MsgStatus {
  Online = 'online',
  Busy = 'busy',
  Away = 'away',
  OffLine = 'offline'
}

export interface Message {
  useravatar: string,
  status: MsgStatus,
  from: string,
  subject: string,
  time: string
}
