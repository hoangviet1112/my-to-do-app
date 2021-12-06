import "../ToDo/ToDo.scss"

import React, { useState } from 'react'

const ToDo = (props) => {
    const [onCompleted, setOnCompleted] = useState(false)

    const [onEdited, setOnEdited] = useState(false)

    const [editText, setEditText] = useState("")
    
    function handleCompleted() {
        setOnCompleted(prevValue => {
            return !prevValue
        })    
    }

    function handleEdited() {
        setOnEdited(true)    
    }

    function handleEditChange(event) {
        setEditText(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setOnEdited(false)
        props.onEdit(editText, props.ToDo.id)
        console.log(editText);
    }

    function handleDelete(id) {
        props.onDelete(id)    
    }
    
    return (
        <div>
            {
                onCompleted ? 
                (
                <div className="to-do">    
                    <p onClick={handleCompleted}>{props.ToDo.value}</p>
                    <div className="options">
                        <i class="fas fa-check-square"></i>
                        <i class="far fa-edit"></i>
                        <i onClick={() => handleDelete(props.ToDo.id)} class="fas fa-trash"></i>    
                    </div>
                </div>
                )
                :
                ( onEdited ?
                (
                <div className="to-do">
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleEditChange} value={editText} type="text" />    
                    </form>    
                </div>
                )
                :
                (
                <div className="to-do">    
                    <p onClick={handleCompleted}>{props.ToDo.value}</p>
                    <div className="options">
                        <i onClick={() => handleEdited(props.ToDo.id)} class="far fa-edit"></i>
                        <i onClick={() => handleDelete(props.ToDo.id)} class="fas fa-trash"></i>    
                    </div>
                </div>
                )
                )
            }    
        </div>
    )
}

export default ToDo
