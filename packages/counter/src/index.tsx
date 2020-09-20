import * as React from "react"
import { PiletApi } from "micro-frontend-sample"

export function setup(app: PiletApi) {
  console.log(app.getData("counter"), "counter:")

  const [counter ,setCounter] = React.useState(app.getData("counter"))
  app.registerPage("/counter", () => {
    return (
      <>
        <p>Counter : {counter}</p>
      </>
    )
  })
  app.registerTile(() => <div>Welcome to Piral!</div>, {
    initialColumns: 2,
    initialRows: 1,
  })
}
