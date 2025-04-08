import React from 'react'

function Card(props) {
    console.log(props.username);
    console.log(props.btnText="visit me"); //default value for btnText
    
  return (
    <>
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
    <img
      src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt=""
      className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
    />
    <div className="mt-6 mb-2">
      <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
        Title
      </span>
      <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
    </div>
    <p className="text-gray-300">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
      amet {props.username}
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center  font-semibold text-white">
        {props.btnText}
    </button>
  </div>
    </>
  )
}

export default Card
