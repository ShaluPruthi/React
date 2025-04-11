import { useState } from 'react'
import useCurrency from './hooks/useCurrency'
import InputBox from './components/InputBox'
function App() {


  return (
    <>
      <h1 className='text-3xl bg-orange-500 font-bold text-center'>CURRENCY APP</h1>
      <useCurrency/>
      <InputBox/>
    </>
  )
}

export default App
