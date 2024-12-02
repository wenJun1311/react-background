import { Fragment, useState } from "react"
import "./App.css"
import home from "./pages/home"

function App() {
  const [todos, setTodos] = useState([])

  // add
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  // delete
  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  // toggle
  const toggleTodo = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
    )
  }

  const getFilteredTodos = () => {
    switch (filter) {
      case "completed":
        return todos.filter((item) => item.completed)
      case "active":
        return todos.filter((item) => !item.completed)
      default:
        return todos
    }
  }

  const [data, setData] = useState([
    { id: 1, name: "1" },
    { id: 2, name: "2" },
  ])

  let id = 3
  const listData = data.map((item) => (
    <Fragment key={item.id}>
      <li>{item.name}</li>
      <li>---------</li>
    </Fragment>
  ))

  const handleClick = () => {
    setData([...data, { id: ++id, name: ++id }])
  }

  return (
    <>
      <ul>{listData}</ul>
      <button onClick={handleClick}>click</button>
      <Fragment>
        <home></home>
      </Fragment>
    </>
  )
}

export default App
