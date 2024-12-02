import TodoItem from "./TodoItem"

function TodoList({ deleteTodo, toggleTodo, todos }) {
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          todo={item}
        ></TodoItem>
      ))}
    </ul>
  )
}

export default TodoList
