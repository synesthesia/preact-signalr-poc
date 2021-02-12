import { h, FunctionalComponent } from 'preact'
import { ListMessage } from './messages'

export type ListSyncMessageProps = {
  message: ListMessage
}

export const ListSyncMessage: FunctionalComponent<ListSyncMessageProps> = ({
  message,
}: ListSyncMessageProps) => {
  console.log('Rendering message')
  return (
    <div>
      {message.dateTime} {message.xrmListId} {message.status}
    </div>
  )
}
