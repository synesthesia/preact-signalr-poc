import { h } from 'preact'
import { useState } from 'preact/hooks'
import * as signalR from '@microsoft/signalr'
import { ListSyncMessage } from './listsyncmessage'
import { ListMessage } from './messages'

export type ListSyncMessageCollectionProps = {
  signalrUrl: string
  xrmListId: string | null
}

export function ListSyncMessageCollection({
  signalrUrl,
  xrmListId,
}: ListSyncMessageCollectionProps) {
  console.log(signalrUrl)

  const [messages, setMessages] = useState(new Array<ListMessage>())

  const connection = new signalR.HubConnectionBuilder()
    .withUrl(signalrUrl)
    .withAutomaticReconnect()
    .build()

  connection.on('statusChanged', (args: any[]) => {
    console.log(args)
    let message: ListMessage = Object.assign(new ListMessage(), args)

    if (xrmListId != null && message.xrmListId !== xrmListId) {
      console.log(
        `Excluding message for list ${message.xrmListId} based on filter ${xrmListId}`
      )
      return
    }

    setMessages((previousMessages) =>
      [...previousMessages, message].sort(
        (a, b) =>
          new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime()
      )
    )

    console.log(messages)
  })

  connection
    .start()
    .then(() => console.log('SignalR connection started'))
    .catch((err: any) => console.error(err))

  return (
    <div>
      <h2>List Sync Messages</h2>
      {messages.map((_, index) => (
        <ListSyncMessage key={index.toString()} message={_} />
      ))}
    </div>
  )
}
