import { useState } from 'react'
import useCurrency from './hooks/useCurrency'
import InputBox from './components/InputBox'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [result, setResult] = useState(0)

  const currencyInfo = useCurrency(from)
  
  const options = Object.keys(currencyInfo) // Removed unused variable

  //swap two variables
  const swap = () => {
    setFrom(to) //swap FROM to TO
    setTo(from) //swap TO to FROM
    setResult(amount) //set result to amount
    setAmount(result) 
  }

  const convert = () => {
    setResult(amount * currencyInfo[to]) //calculate the result
  }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url(https://images.pexels.com/photos/6021400/pexels-photo-6021400.jpeg?auto=compress&cs=tinysrgb&w=600)`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount = {amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount = {result}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={from}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert 
                        {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App;
