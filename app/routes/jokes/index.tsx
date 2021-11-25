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

export default function JokesOutlet() {
  return (
    <div>
      <h2>I am the outlet for all things jokey.</h2>
    </div>
  )
}
