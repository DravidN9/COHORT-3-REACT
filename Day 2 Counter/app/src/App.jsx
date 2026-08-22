import React from 'react'


const App = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
        <button onClick={() => setCount(0)}>
        Reset
      </button>

    </div>
  )
}

export default App
