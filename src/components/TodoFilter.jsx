function TodoFilter({ setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("compledted")}>Compledted</button>
    </div>
  )
}

export default TodoFilter
