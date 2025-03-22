import { useState } from 'react'
import './App.css'

//hooks are used to update data into UI:useEffect, useState, useContext, useReducer

function App() {
  //change propagate to UI using useState
  //useState gives two values in the form of array: 1. variable 2. function
  const [counter, setCounter]=useState(0)

  const addValue = () => {
    if(counter <= 19){
      setCounter(counter+1)
    }
    // OR counter=counter + 1 ; setCounter(counter)
  }
  
  const removeValue=()=>{
    if(counter >= 1){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
    </>
  )
}

export default App
