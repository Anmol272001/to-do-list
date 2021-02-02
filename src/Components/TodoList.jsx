import React from 'react'
import Todo from './Todo';

function TodoList({todos}) {
    return (
        <div className="todo-list">
            {
                todos.map((todo) => {
                    return <Todo todo={todo} />
                })
            }
        </div>
    )
}

export default TodoList
