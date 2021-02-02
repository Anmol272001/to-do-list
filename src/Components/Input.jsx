import React from 'react'

function Input({value, setValue, submitHandler}) {

    return (
        <form onSubmit= {submitHandler} >
            <input
                placeholder="Create a new task..."
                className="input-field"
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                value = {value}
            />
            <button style={{display : "none"}}></button>
        </form>
    )
}

export default Input
