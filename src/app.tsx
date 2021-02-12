import { h, Fragment } from 'preact'
import { ListSyncMessageDisplay } from './listsyncmessagedisplay'

export function App() {
  return (
    <>
      <ListSyncMessageDisplay
        signalrUrl={import.meta.env.VITE_SIGNALR_INFORMATION}
        xrmListId={null}
      />
    </>
  )
}
