A very basic proof of concept to test writing a small app in Preact which will respond to messages from a SignalR hub by displaying them on screen.

Key dependencies:

- Vite
- Preact
- [@microsoft/signalr](https://www.npmjs.com/package/@microsoft/signalr)

As written expects an environment variable named VITE_SIGNALR_INFORMATION which contains the URL at which Signalr can find a /negotiate endpoint.

In my case this was an Http Triggered Azure Function within the application that is generating the messages to which we are listening.

If you are using a Function App in this way, Rememberr to allow http://localhost:3000 in your CORS settings.

Some tool configuration cribbed from [TomokiMiyauci](https://github.com/TomokiMiyauci) here [Building a Typescript Environment for Preact with Vite](https://intellisense.dev/post/vite-preact-typescript/)

A couple of key pointers cribbed from [This article](https://medium.com/swlh/creating-a-simple-real-time-chat-with-net-core-reactjs-and-signalr-6367dcadd2c6) by [Andre Lopes](https://medium.com/@andrevitorlopes)
