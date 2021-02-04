import React from 'react'

function TodoList({ todos, handleDelete, toggleDone, filteredTodos}) {

    return (
        <div className="todo-list">
            <div className="todo-items" drop>
            {
                filteredTodos.map((todo) => {
                    return (
                        <div
                            draggable
                            key = {todo.id}
                            className="todo-item">
                            <span
                                onClick={() => toggleDone(todo)}
                                className = {`text ${todo.done ? "completed" : ""}`}
                            >
                                {todo.value}
                            </span>
                            <div
                                onClick = {()=> handleDelete(todo.id)}
                                className="exit">✕</div>
                        </div>
                    )
                })
            }
            </div>            
        </div>
    )
}

export default TodoList
