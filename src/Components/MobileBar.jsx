import React from 'react'

function MobileBar({ status, setStatus }) {
    
    function handleStatus(inp) {
        setStatus(inp)
    }

    return (
        <div>
            <div className="mobile-bar">
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
        </div>
    )
}

export default MobileBar
