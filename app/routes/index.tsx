import { Link, LinksFunction } from "remix"
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
  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>J🤡KES!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="jokes">Read a jokey-joke</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
