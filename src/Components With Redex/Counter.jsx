
// Store ma jo bhe name dia ha wo yaha chahiye //
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, InputValue } from '../Components With Redex/counterSlice'
const Counter = () => {
// Here we give first simple copy state thn reducer key 
//from store and then get the 
//intial valur from its slice//  
  const countRedux = useSelector((state)=> state.counter.value)
  const inputSelecter = useSelector((state)=> state.counter.rtf)
  const[input,setInput] = useState()
  const dispatch = useDispatch()
  console.log(input)
  return (
    <div>
    <input type="text" onChange={(e)=>{setInput(e.target.value)}}  />
 <button onClick={()=> dispatch(InputValue(input))}    >Click ME </button>
  
<span>{inputSelecter}</span> <br /> <br />

      <button  onClick={()=> dispatch(increment())  } >Increase</button>
      <span>Value : {countRedux}  </span>
      <button  onClick={()=> dispatch(decrement()) }    >Decrease</button>
    </div>
  )
}

export default Counter
