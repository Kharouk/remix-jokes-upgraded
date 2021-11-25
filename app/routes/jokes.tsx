import { Link, Outlet } from "remix"
import type { LinksFunction } from "remix"
import styleSheet from "../styles/jokes.css"

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
      <header className="jokes-header">
        <div className="container">
          <h1 className="home-link">
            <Link to="/" title="Remiiix Jokes" aria-label="Remix Jokes">
              <span className="logo">🤡</span>
              <span className="logo-medium">J🤡KES</span>
            </Link>
          </h1>
        </div>
      </header>
      <main className="jokes-main">
        <div className="container">
          <div className="jokes-list">
            <Link to=".">Get a randomised joke!</Link>
            <p>Look at all these jokes:</p>
            <ul>
              <li>
                <Link to="joke-id" prefetch="intent">
                  Hippoooo
                </Link>
              </li>
            </ul>
            <Link to="new" className="button">
              Add a new J🤡KE
            </Link>
          </div>
          <div className="jokes-outlet">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}
