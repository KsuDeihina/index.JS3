import React from 'react'
import { useState } from 'react'

const Counter = ({ children }) => {

    const [text, setText] = useState()

    const write = (e) => {
        setText (e.target.value )
    }

  return (
    <div>
      {children}
      <h1>{text}</h1>
      <form><input value = {text} onChange = {write}></input></form>     
    </div>
  )
}

export default Counter
