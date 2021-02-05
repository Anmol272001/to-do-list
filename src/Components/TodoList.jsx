import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function TodoList({setLocalStorage, todos, handleDelete, toggleDone, filteredTodos}) {

    return (
        <DragDropContext
            onDragEnd={(param) => {
                let srcInd = param.source.index;
                let destInd = param.destination.index;
                todos.splice(destInd, 0, todos.splice(srcInd, 1)[0]);
                setLocalStorage();
            }}
        >
            <div className="todo-list">
                <Droppable droppableId="todo-drops">
                    {(provided, _) => (
                        <div className="todo-items"  ref={provided.innerRef} {...provided.droppableProps}>
                            {
                                filteredTodos.map((todo,i) => {
                                    return (
                                        <Draggable
                                            key={todo.id}
                                            draggableId={`draggable-${todo.id}`}
                                            index={i}
                                        >
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    key={todo.id}
                                                    className="todo-item"
                                                >
                                                    <span
                                                        onClick={() => toggleDone(todo)}
                                                        className={`text ${todo.done ? "completed" : ""}`}
                                                    >
                                                        {todo.value}
                                                    </span>
                                                    <div
                                                        onClick={() => handleDelete(todo.id)}
                                                        className="exit">✕</div>
                                                </div>
                                            )}
                                        </Draggable>
                                    )
                                })
                            }
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>    
            </div>
        </DragDropContext> 
    )
}

export default TodoList
