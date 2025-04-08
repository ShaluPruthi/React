import React from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  // useState hook to manage the counter state, it sends the batches of work.
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    //returns the previous value 
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Interview</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}>
        Add Value {counter}
      </button>

      <button
      onClick={removeValue}>
        Remove Value  {counter}
      </button>

      <p>Footer : {counter}</p>
    </>
  )
}

export default App
