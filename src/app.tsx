import { h, Fragment } from 'preact'
import { ListSyncMessageCollection } from './listsyncmessagecollection'

export function App() {
  return (
    <>
      <ListSyncMessageCollection
        signalrUrl={import.meta.env.VITE_SIGNALR_INFORMATION}
        xrmListId={null}
      />
    </>
  )
}
