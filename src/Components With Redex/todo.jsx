import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { inputValue }  from './todoSlice'
const Todo = () => {
  const text = useSelector((state) => state.input.rr)
  const text2 = useSelector((state) => state.input.ss)
  const dispatch = useDispatch()
  let [input, setInput ] =useState()

  console.log(text)
  return (
    <div>
      
<h1>Ahmed Raza</h1>
<input type="text"   onChange={(e)=>{setInput(e.target.value)}}  />
<button   onClick={()=>{dispatch(inputValue(input))}}  >Click Me</button>
<h1>{text}</h1>
<h1>{text2}</h1>

    </div>
  )
}

export default Todo
