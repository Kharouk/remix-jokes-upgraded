import { LiveReload } from "remix"

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix.jokes 🙃</title>
      </head>
      <body>
        <h1>Hello World!</h1>
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}
