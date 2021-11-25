import type { LinksFunction } from "remix"
import styleSheet from "../styles/index.css"

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styleSheet
    }
  ]
}

export default function IndexPage() {
  return <div className="container"></div>
}
