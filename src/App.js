
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import { useState, useEffect, useRef } from 'react';
function App() {
  const [todo, setTodo]= useState([]);
  const [addBtn,setAddBtn]=useState(true);
  const[editItem,setEditItem]=useState(null);
  const inputRef=useRef('');

  return (
    <div className="App vh-100  container-fluid text-white" style={{backgroundColor:"darkblue"}}>
     <div className="row">
      <div className="col-md-4 my-5 m-auto p-3" style={{height:"500px"}}>
        <h1>ToDo List</h1>
        <Create todo={todo} setTodo={setTodo} inputRef={inputRef} addBtn={addBtn} setAddBtn={setAddBtn} editItem={editItem} setEditItem={setEditItem}/>
       <Read todo={todo} setTodo={setTodo} inputRef={inputRef} addBtn={addBtn} setAddBtn={setAddBtn} editItem={editItem} setEditItem={setEditItem}/>
      </div>
     </div>
    </div>
  );
}

export default App;
