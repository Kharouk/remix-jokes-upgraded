import { Links, LiveReload, Outlet } from "remix"
import type { LinksFunction } from "remix"

import globalHref from "./styles/global.css"
import globalMediumHref from "./styles/global-medium.css"
import globalLargeHref from "./styles/global-large.css"

/**
 * You can use media queries in link tags to load specific stylesheets for viewports 🤯
 */

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalHref
    },
    {
      rel: "stylesheet",
      href: globalMediumHref,
      media: "print, (min-width: 640px)"
    },
    {
      rel: "stylesheet",
      href: globalLargeHref,
      media: "screen and (min-width: 1024px)"
    }
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix.jokes 🙃</title>
        <Links />
      </head>
      <body>
        <Outlet />

        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}
