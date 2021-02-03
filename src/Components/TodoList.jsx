import React from 'react'

function TodoList({ todos, handleDelete, taskDone, toggleDone}) {

    return (
        <div className="todo-list">
            {
                todos.map((todo) => {
                    return (
                        <div
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
            <div className="bottom-status">
                    {taskDone} items to-do
            </div>
            
        </div>
    )
}

export default TodoList
