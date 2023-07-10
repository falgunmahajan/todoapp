
import React from 'react'
import { MdDelete, MdEdit } from "react-icons/md";
export default function Read({todo,setTodo,inputRef,addBtn, setAddBtn,editItem,setEditItem}) {
  
  const deleteTodo=(id)=>{
      setTodo(todo.filter((item)=>item.id!==id))
      inputRef.current.value=""
  }
  const editTodo=(id)=>{
    const itemValue=todo.find(item=>item.id===id)
    inputRef.current.value=itemValue.name;
    setAddBtn(false)
    setEditItem(id)
  }
  return (
    <div className='todo-list mt-3'>
      {todo.map((item)=>
        <div className="list-item border  py-1 px-3 mt-2 d-flex justify-content-between " style={{borderRadius:"10px"}}>
          {item.name}
          <div className="buttons d-flex ">
          <div onClick={()=>editTodo(item.id)}><MdEdit/></div>
            <div className='ms-3' onClick={()=>deleteTodo(item.id)}><MdDelete/></div>
          {/* <button type="button" className='btn'><MdEdit/></button>
            <button type="button" className='btn' onClick={()=>deleteTodo(index)}><MdDelete/></button> */}
          </div>
          </div>)}
    </div>
  )
}
