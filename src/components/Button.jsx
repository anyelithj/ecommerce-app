import React from 'react'

const Button = ({text}) => {
  return (
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
      {text}
    </button>
  )
}

export default Button
