import { Outlet } from "remix"

export default function JokesPage() {
  return (
    <div>
      <h1>You got the jokes? I got the jokes!</h1>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
