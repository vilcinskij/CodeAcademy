import React from 'react'

const TodoItem = ({ data }) => {
    let { title, done } = data
    return (
        <div>{title}</div>
    )
}

export default TodoItem