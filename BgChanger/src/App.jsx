import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{ backgroundColor : color}}
      >
        <div className='fixed flex flex-wrap justify-center 
        bottom-12 inset-x-0 px-2 gap-3'>
          <div className='flex flex-wrap justify-center gap-2 
          shadow-lg bg-white px-3 py-2 rounded-lg'>

            {/* onClick wants function not a return value that's why we don't write onClick={setColor("red")} */}
            <button
            onClick={() => setColor("red")}
            className='outline-none px-4 py-1 rounded-lg text-white shadow-lg'
            style={{ backgroundColor: "red" }}
            >Red</button>

            <button
            onClick={() => setColor("green")}
            className='outline-none px-4 py-1 rounded-lg text-white shadow-lg'
            style={{ backgroundColor: "green" }}
            >Green</button>

            <button
            onClick={() => setColor("yellow")}
            className='outline-none px-4 py-1 rounded-lg text-white shadow-lg'
            style={{ backgroundColor: "yellow" }}
            >Yellow</button>

            <button
            onClick={() => setColor("blue")}
            className='outline-none px-4 py-1 rounded-lg text-white shadow-lg'
            style={{ backgroundColor: "blue" }}
            >Blue</button>

            <button
            onClick={() => setColor("pink")}
            className='outline-none px-4 py-1 rounded-lg text-white shadow-lg'
            style={{ backgroundColor: "pink" }}
            >Pink</button>

            <button
            onClick={() => setColor("orange")}
            className='outline-none px-4 py-1 rounded-lg text-white shadow-lg'
            style={{ backgroundColor: "orange" }}
            >Orange</button>

            <button
            onClick={() => setColor("grey")}
            className='outline-none px-4 py-1 rounded-lg text-white shadow-lg'
            style={{ backgroundColor: "grey" }}
            >Grey</button>

            <button
            onClick={() => setColor("purple")}
            className='outline-none px-4 py-1 rounded-lg text-black shadow-lg'
            style={{ backgroundColor: "purple" }}
            >Purple</button>

            <button
            onClick={() => setColor("black")}
            className='outline-none px-4 py-1 rounded-lg text-white shadow-lg'
            style={{ backgroundColor: "black" }}
            >Black</button>

            <button
            onClick={() => setColor("white")}
            className='outline-none px-4 py-1 rounded-lg text-grey shadow-lg'
            style={{ backgroundColor: "white" }}
            >White</button>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
