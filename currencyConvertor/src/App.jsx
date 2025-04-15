import { useState } from 'react'
import useCurrency from './hooks/useCurrency'
import InputBox from './components/InputBox'
function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [result, setResult] = useState(0)

  const currencyInfo = useCurrency(from)
  

  return (
    
    <>
      <h1 className='text-3xl bg-orange-500 font-bold text-center'>CURRENCY APP</h1>
      <useCurrency/>
      <InputBox/>
    </>
  )
}

export default App
