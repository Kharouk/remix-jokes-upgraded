import type { LinksFunction } from "remix"
import styleSheet from "../styles/index.css"

console.log({ styleSheet })

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styleSheet
    }
  ]
}

export default function IndexPage() {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>Remixing up the JS Framework Ecosphere.</h2>
    </div>
  )
}
