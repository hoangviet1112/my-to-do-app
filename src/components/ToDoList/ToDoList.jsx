import "../ToDoList/ToDoList.scss"

import React, { useState } from 'react'
import ToDo from "../ToDo/ToDo"


const ToDoList = () => {
    const [inputText, setInputText] = useState("")
    
    const [toDoList, setToDoList] = useState([])
    
    function handleSubmit(event) {
        event.preventDefault()
        setToDoList(prevValue => {
            return [...prevValue, 
            {
                id: prevValue.length + 1,
                value: inputText
            }]
        })
        setInputText("") 
    }

    console.log(toDoList);
    
    function handleDelete(id) {
        setToDoList(prevValue => {
            return prevValue.filter((item) => {
                return item.id !== id 
            })
        })
    }

    function handleEdit(text, id) {
        setToDoList(prevValue => {
            return prevValue.map(item => {
                return item.id === id ? {...item, value: text} : item
            })
        })    
    }

    return (
        <div className="to-do-app">
            <h1>TO DO APP</h1>
            <form className="to-do-input" onSubmit={handleSubmit}>
                <input onChange={e => setInputText(e.target.value)} value={inputText} placeholder="New Items..." />
                <button>
                    <i class="far fa-plus-square"></i> 
                </button>
            </form>
            {
                toDoList.sort((a, b) => (a.value.toLowerCase() === b.value.toLowerCase()) ? 1 : (a.value.toLowerCase() > b.value.toLowerCase()) ? 1 : -1).map(item => {
                    return <ToDo key={item.id} onEdit={handleEdit} onDelete={handleDelete} ToDo={item} />
                })
            }
        </div>
    )
}

export default ToDoList
