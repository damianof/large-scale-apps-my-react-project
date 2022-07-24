// file: src/components/counter/Counter.tsx
import * as React from 'react'

export function Counter() {
  let [count, setCount] = React.useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <button onClick={increment}>
      count is {count}
    </button>
  )
}
