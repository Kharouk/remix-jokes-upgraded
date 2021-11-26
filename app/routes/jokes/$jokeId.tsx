import { Link, LoaderFunction, useLoaderData } from "remix"
import type { Joke } from "@prisma/client"
import { db } from "../../utils/db.server"

export let loader: LoaderFunction = async ({ params: { jokeId } }) => {
  let joke = await db.joke.findUnique({
    where: { id: jokeId }
  })

  if (!joke) throw new Error("Joke got lost in the mail!")
  return joke
}

export default function JokeId() {
  const joke = useLoaderData<Joke>()

  return (
    <div>
      <h2>{joke.content}</h2>
      <Link to=".">{joke.name} Permalink</Link>
    </div>
  )
}
