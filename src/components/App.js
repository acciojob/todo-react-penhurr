
import React, { useState } from "react";
import './../styles/App.css';
import Todo from "./Todo";

const App = () => {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  function addTodo(){
    setTodos([...todos,{id: Date.now(), task: input}])
    setInput("")
    

  }
  console.log(todos)

  return (
    <div className="main">
        {/* Do not remove the main div */}
        <h1>To-Do List</h1>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button type="button" onClick={()=>addTodo()}>Add Todo</button>
        { todos.length!==0 && 
        todos.map(todo => 
        <Todo key={todo.id} id={todo.id} todo={todo} todos={todos} setTodos={setTodos} />)
        }
    </div>
  )
}

export default App
