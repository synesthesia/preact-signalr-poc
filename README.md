A very basic proof of concept to test writing a small app in Preact which will respond to messages from a SignalR hub by displaying them on screen.

Key dependencies:

- Vite
- Preact
- [@microsoft/signalr](https://www.npmjs.com/package/@microsoft/signalr)

As written expects an environment variable named VITE_SIGNALR_INFORMATION which contains the URL at which Signalr can find a /negotiate endpoint.

In my case this was an Http Triggered Azure Function within the application that is generating the messages to which we are listening.

Some tool configuration cribbed from [TomokiMiyauci](https://github.com/TomokiMiyauci) here [Building a Typescript Environment for Preact with Vite](https://intellisense.dev/post/vite-preact-typescript/)
