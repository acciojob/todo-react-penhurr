import React from "react";

const Todo = ({id, todo, todos, setTodos}) => {

    function deleteTask(id){
        setTodos(todos.filter(t=>
            id!==t.id
        ))
    }

    return(

        <div className="todo">
            <p><span>{todo.task}</span><button type="button" onClick={()=>deleteTask(id)}>Delete</button></p>
        </div>

    )

}

export default Todo