import React, { useState } from 'react'
import TodoItem from '../../components/TodoItem/TodoItem'

const TodoPage = () => {

    const [toList, setTodoList] = useState([]);
    const [todoItem, setTodoItem] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        let input = event.target.elements['todo-input'].value;

        let todoData = {
            title: input,
            done: false
        }

        setTodoList(prevState => [todoData, ...prevState])
    }

    let pageTitle = toList.length > 0 ? 'ToDo List:' : 'No items'

    function renderTodoItem() {
        let todoItem = toList.map((item, i) => {
            return <TodoItem key={i} data={item} />
        })
        return todoItem
    }

    const todoInputHandler = event => setTodoItem(event.target.value)


    return (
        <div className='main-content'>
            <h2 className='page-title'>{pageTitle}</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor='todo-input'>Enter your todo</label>
                <input type="text" id='todo-input' value={todoItem} onChange={todoInputHandler} />
                <input type="submit" value="Add" />
            </form>
            {toList.length > 0 && renderTodoItem()}
        </div>
    )
}

export default TodoPage