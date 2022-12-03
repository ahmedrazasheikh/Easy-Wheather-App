// import React, { useState } from 'react'
import { useState, useEffect, useRef } from "react";
const Todo = () => {

    const[todo,setTodo] = useState()
    const count = useRef();
    const[todoArray,setTodoArray] = useState([])
    console.log(todo)

    console.log(todoArray)
const valuePush = ()=>{
count.current.value = ''

todoArray.push(todo)
}

  return (
    <div>
      <input  ref={count} type="text"  onChange={(e)=>setTodo(e.target.value)} />  
      <button onClick={valuePush }  >Add</button>

      <ul className='ul'  >
    <li>{todoArray}</li>
      </ul>

    </div>
  )
}

export default Todo
