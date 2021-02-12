export interface IMessage {
  dateTime: Date
  status: String
}

export class ListMessage implements IMessage {
  dateTime!: Date
  status!: String
  f24ListId!: String
  listname!: String
  xrmListId!: String
}
