export default function NewJokeOutlet() {
  return (
    <div>
      <form method="post">
        <div>
          <label htmlFor="name">
            Name:
            <input name="name" type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="content">
            Content:
            <textarea name="content" />
          </label>
        </div>
        <div>
          <button className="button" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  )
}
