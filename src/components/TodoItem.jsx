function TodoItem({ toggleTodo, deleteTodo, todo }) {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <div>{todo.text}</div>
      <button onClick={() => deleteTodo(todo.id)}>删除</button>
      <button onClick={() => toggleTodo(todo.id)}>切换</button>
    </li>
  )
}

export default TodoItem
