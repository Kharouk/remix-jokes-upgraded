export default function NewJokeOutlet() {
  return (
    <div>
      <form>
        <label htmlFor="name">
          Name:
          <input name="name" type="text" />
        </label>
        <br />
        <label htmlFor="content">
          Content:
          <input name="content" type="text" />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
