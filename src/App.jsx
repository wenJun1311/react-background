import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./store/modules/counterStore"

const App = () => {
  const { count } = useSelector((state) => state.counter)
  const displatch = useDispatch()

  return (
    <>
      <div>
        <button onClick={() => displatch(decrement())}>-</button>
        <div>{count}</div>
        <button onClick={() => displatch(increment())}>+</button>
      </div>
    </>
  )
}

export default App
