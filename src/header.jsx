import React, { useEffect, useRef } from 'react'

const Header = () => {
    const first = useRef();
    const two = useRef();
    const three = useRef();
useEffect( ()=>{
    console.log(first)
    console.log(two)
    console.log(three)
}, []
)
    
  return (
    <div>
      <input ref={first}   type="text" />
      <input ref={two}   type="text" />
      <input ref={three}   type="text" />
    </div>
  )
}

export default Header
