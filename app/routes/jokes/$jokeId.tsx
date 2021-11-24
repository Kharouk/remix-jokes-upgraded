import type { FC } from "react"

interface JokeIdProps {}

const JokeId: FC<JokeIdProps> = (props) => {
  console.log({ props })
  return (
    <div>
      <h2>What do you call a remixed joke? An old original!</h2>
    </div>
  )
}

export default JokeId
