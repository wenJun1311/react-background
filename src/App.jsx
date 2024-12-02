import { useState } from "react"
import "./App.css"
import AddTodo from "./components/AddTodo"
import TodoFilter from "./components/TodoFilter"
import TodoList from "./components/TodoList"
import Home from "./pages/home"
import image from "../src/assets/react.svg"

function App() {
  // const [todos, setTodos] = useState([])
  // const [filter, setFilter] = useState("all")

  // // add
  // const addTodo = (text) => {
  //   const newTodo = {
  //     id: Date.now(),
  //     text,
  //     completed: false,
  //   }
  //   setTodos([...todos, newTodo])
  // }

  // // delete
  // const deleteTodo = (id) => {
  //   setTodos(todos.filter((item) => item.id !== id))
  // }

  // // toggle
  // const toggleTodo = (id) => {
  //   setTodos(
  //     todos.map((item) => {
  //       if (item.id === id) {
  //         item.completed = !item.completed
  //       }
  //       return item
  //     })
  //   )
  // }

  // const getFilteredTodos = () => {
  //   switch (filter) {
  //     case "completed":
  //       return todos.filter((item) => item.completed)
  //     case "active":
  //       return todos.filter((item) => !item.completed)
  //     default:
  //       return todos
  //   }
  // }
  const imgData = {
    className: "small",
    style: {
      width: 400,
      backgroundColor: "red",
    },
  }

  return (
    <>
      {/* {
        <>
          <h1>TodoList</h1>
          <AddTodo addTodo={addTodo}></AddTodo>
          <TodoList
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            todos={getFilteredTodos()}
          ></TodoList>
          <TodoFilter setFilter={setFilter}></TodoFilter>
          <Home className="foo"></Home>
        </>
      } */}

      <div>
        <img src={image} alt="" {...imgData} />
      </div>
    </>
  )
}

export default App
