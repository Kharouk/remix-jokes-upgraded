import { Link, Outlet, useLoaderData } from "remix"
import type { LinksFunction, LoaderFunction } from "remix"
import { db } from "~/utils/db.server"
import type { Joke } from "@prisma/client"
import styleSheet from "../styles/jokes.css"

type LoaderData = {
  jokes: Joke[]
}

export let loader: LoaderFunction = async () => {
  let data: LoaderData = {
    jokes: await db.joke.findMany()
  }
  return data
}

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styleSheet
    }
  ]
}

export default function JokesPage() {
  const { jokes } = useLoaderData<LoaderData>()

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
              {jokes.map((joke) => (
                <li key={joke.id}>
                  <Link prefetch="intent" to={joke.id}>
                    {joke.name}
                  </Link>
                </li>
              ))}
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
