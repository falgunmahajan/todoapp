import React from 'react'
import uuid from 'react-uuid'
import { useEffect } from 'react'
export default function Create({todo, setTodo, inputRef, addBtn, setAddBtn, editItem,setEditItem}) {
    const createTodo=()=>{
      if(inputRef.current.value && !addBtn)
      {
       setTodo(todo.map(item=>{
          if(item.id===editItem)
          {
             return {...item,name:inputRef.current.value}
          }
          return item
          
        }))
        inputRef.current.value=""
        setAddBtn(true)
      }
     else if(inputRef.current.value && addBtn)
      {
        const todoItem={id:uuid(), name:inputRef.current.value}
        setTodo([...todo,todoItem])
        inputRef.current.value=""
      }
     
    }
    console.log(todo)
  return (
    <div className="d-flex ">
    <input type="text" className="form-control mt-5" placeholder="Enter a Todo..." ref={inputRef}/>
    <button type="button" className="btn btn-danger ms-2 mt-5" onClick={createTodo}>{addBtn?"Add":"Update"}</button>
    </div>
  )
}

