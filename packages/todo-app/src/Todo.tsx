import * as React from "react"

export default ({ data }) => {
   
  const [todos, setTodos] = React.useState([])
  const todoText = React.useRef(null)

  const addTodo = (e) => {
    const newArray = todos.concat([todoText.current.value])
    setTodos(newArray)
    todoText.current.value = ""
    todoText.current.focus()
  }

  return (
    <>
      <h1>Todo Application</h1>
      <p>{JSON.stringify(todos, null, 2)}</p>
      <p>{JSON.stringify(data, null, 2)}</p>
      <section>
        <label htmlFor="todo-text">Todo :</label>
        <input ref={todoText} id="todo-text" type="text" />
        <button onClick={addTodo}>Save</button>
      </section>
    </>
  )
}
