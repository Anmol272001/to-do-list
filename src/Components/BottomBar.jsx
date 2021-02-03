import React from 'react'

function BottomBar({ taskDone, status, setStatus, clearHandler }) {

    function handleStatus(inp) {
        setStatus(inp)
    }

    return (
        <div className="bottom-status">
            <div className="task-completed" >{taskDone} items to-do</div>
            <div className="select-options">
                <button
                    className = {status === 'All' ? "btn-active" : ""}
                    onClick={() => handleStatus('All')}>All</button>
                <button
                    className = {status === 'Active' ? "btn-active" : ""}
                    onClick={() => handleStatus('Active')}>Active</button>
                <button
                    className = {status === 'Completed' ? "btn-active" : ""}
                    onClick={() => handleStatus('Completed')}>Completed</button>
            </div>
            <div
                onClick = {clearHandler}
                className="clear-completed">Clear Completed</div>
        </div>
    )
}

export default BottomBar
