import { h, Fragment } from 'preact'
import { Logo } from './logo'
import * as signalR from "@microsoft/signalr";

export function App() {
  const connection = new signalR.HubConnectionBuilder()
    .withUrl(import.meta.env.VITE_SIGNALR_INFORMATION)
    .withAutomaticReconnect()
    .build();

  connection.on("statusChanged", ( message: string) => {
    console.log(message);
  });

  connection.start().catch((err: any) => console.error(err));


  return (
    <>
      <Logo />
      <p>Hello Vite + Preact!</p>
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
    </>
  )
}
