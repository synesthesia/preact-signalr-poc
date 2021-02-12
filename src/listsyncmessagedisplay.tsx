import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import * as signalR from '@microsoft/signalr'
import { ListSyncMessage } from './listsyncmessage'
import { ListMessage } from './messages'

export type ListSyncMessageDisplayProps = {
  signalrUrl: string
  xrmListId: string | null
}

export function ListSyncMessageDisplay({
  signalrUrl,
  xrmListId,
}: ListSyncMessageDisplayProps) {
  console.log(signalrUrl)

  const [connection, setConnection] = useState(
    (null as unknown) as signalR.HubConnection
  )
  const [messages, setMessages] = useState(new Array<ListMessage>())

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl(signalrUrl)
      .withAutomaticReconnect()
      .build()

    setConnection(newConnection)
  }, [signalrUrl])

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          console.log('Connected!')

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
                  new Date(b.dateTime).getTime() -
                  new Date(a.dateTime).getTime()
              )
            )

            console.log(messages)
          })
        })
        .catch((e) => console.log('Connection failed: ', e))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connection, xrmListId])

  return (
    <div>
      <h2>List Sync Messages</h2>
      {messages.map((_, index) => (
        <ListSyncMessage key={index.toString()} message={_} />
      ))}
    </div>
  )
}
