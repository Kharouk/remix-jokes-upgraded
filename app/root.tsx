import { LiveReload, Outlet } from "remix"

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix.jokes 🙃</title>
      </head>
      <body>
        <Outlet />

        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}
