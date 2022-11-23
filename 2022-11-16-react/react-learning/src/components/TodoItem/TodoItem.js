import React from 'react'

const TodoItem = ({ data }) => {
    let { title, done } = data
    let progressText = done ? 'Done' : 'In progress';
    let doneClass = done ? 'todo-item done' : 'todo-item';
    return (
        <div className={doneClass}>{title} ({progressText})</div>
    )
}

export default TodoItem