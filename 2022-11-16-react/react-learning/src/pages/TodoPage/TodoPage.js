import React from 'react'
import TodoItem from '../../components/TodoItem/TodoItem'

const TodoPage = () => {
    let todoList = [
        {
            title: 'Task1',
            done: true
        },
        {
            title: 'Task2',
            done: true
        },
        {
            title: 'Task3',
            done: false
        },
        {
            title: 'Task4',
            done: true
        },

    ]
    function renderTodoList() {
        let todoItem = todoList.map((item, i) => {
            <TodoItem key={i} data={item} />
        })
        console.log(todoItem);
        return todoItem
    }

    return (
        renderTodoList()
    )
}

export default TodoPage