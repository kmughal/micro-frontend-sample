import * as React from "react"
import { PiletApi } from "micro-frontend-sample"
import { Link } from "react-router-dom"

const TodoPage = React.lazy(() => import("./Todo"))

export function setup(app: PiletApi) {
  
  const [counter, setCounter] = React.useState(0)
  setInterval(() => {
    setCounter(counter + 1)
    app.setData("counter", counter)
  })

  app.showNotification("A simple todo app!", {
    autoClose: 2000,
  })

  const connect = app.createConnector(
    () =>
      new Promise((resolve, reject) => {
        setTimeout(
          () => resolve([{ id: 1, title: "coming from a backend" }]),
          1000
        )
      })
  )

  app.registerPage("/todo", connect(TodoPage))
  app.registerTile(() => <Link to="/todo">Todo App</Link>, {
    initialColumns: 2,
    initialRows: 1,
  })
}
