import './TodoItem.css'
import React, { useState } from 'react'


const TodoItem = ({ data: { title, done } }) => {

    const [status, setStatus] = useState(done);

    function statusHandle() {
        setStatus(!status);
    }

    let progressText = status ? 'Done' : 'In progress';
    let doneClass = status ? 'todo-item done' : 'todo-item';

    return (
        <div className={doneClass} onClick={statusHandle}>{title} ({progressText})</div>
    )
}

export default TodoItem