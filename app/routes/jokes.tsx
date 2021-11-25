import { Outlet } from "remix"
import type { LinksFunction } from "remix"
import styleSheet from "../../styles/jokes.css"

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styleSheet
    }
  ]
}

export default function JokesPage() {
  return (
    <div className="jokes-layout">
      <h1>You got the jokes? I got the jokes!</h1>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
