import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState('')


  //ref hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
      let pass= "";
      let str= 
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if(number) str += "0123456789";
      if(characters) str += "!@#$%^&*()_+-=~`";

      for(let i=1; i<=length; i++){
        //it gives the index value of array
        let char = Math.floor(Math.random() * str.length + 1);

        //pick the character
        pass += str.charAt(char);

      }
      //Read the value
      setPassword(pass);

    },
    //optimize the changes into cache
    [length, number, characters, setPassword])



    const copyPassword = useCallback(() => {
      //select the text and copy
      passwordRef.current?.select();

      //set the selection range
      passwordRef.current?.setSelectionRange(0, 5);

      //copy the text into clipboard
      window.navigator.clipboard.writeText(password)
    },
    [password])



    //RUN THE FUNCTION
    //can not call the passwordGenerator directly in the return statement
    useEffect(() => {
      passwordGenerator();
    },
    //changes occur will re-run
    [length, number, characters, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='bg-white outline-none w-full py-1 px-3'
        placeholder='password'
        ref={passwordRef}
        readOnly 
        />

        <button className='bg-blue-700 text-white outline-none px-3 py-0.5 shrink-0'
        onClick={copyPassword}>
          Copy

          </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={8}
          max={100}
          value={length}
          className='cursor-pointer' 
          onChange={(e) => {setLength(e.target.value)}}/>

          <label >Length : {length}</label>

        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={number}
          id='numberInput'

          //prevoius value access
          onChange={() => {setNumber((prev) =>
            !prev);
          }}
          />

          <label htmlFor='numberInput'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={characters}
          id='charactersInput'
          onChange={() => {setCharacters((prev) =>
            !prev);
          }}
          />

          <label htmlFor='charatersInput'>Characters</label>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
