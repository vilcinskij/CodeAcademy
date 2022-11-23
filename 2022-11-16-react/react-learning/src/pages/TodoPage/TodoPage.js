import React from 'react'
import TodoItem from '../../components/TodoItem/TodoItem'

const TodoPage = () => {
    let todoList = [
        {
            title: 'Task1',
            done: false
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
        }

    ]

    let pageTitle = todoList.length > 0 ? 'ToDo List:' : 'No items'

    function renderTodoItem() {
        let todoItem = todoList.map((item, i) => {
            return <TodoItem key={i} data={item} />
        })
        return todoItem
    }

    return (
        <div className='main-content'>
            <h2 className='page-title'>{pageTitle}</h2>
            {todoList.length > 0 && renderTodoItem()}
        </div>
    )
}

export default TodoPage