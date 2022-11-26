import './CounterPage.css'
import React, { useState } from 'react'

const CounterPage = () => {

    const countDefault = 5;
    const [count, setCount] = useState(countDefault);
    const [grades, setGrades] = useState([])

    const countClass = num => num < 5 ? 'red' : 'green';

    const counterHandler = num => setCount(prevState => prevState + num)
    const counterInputHandler = event => setCount(Number(event.target.value))
    const addGradeHandler = () => {
        setGrades(prevState => [...prevState, count])
        setCount(countDefault)
    }

    return (
        <div id="numbers">
            <input type="number" value={count} min={1} max={10} onChange={counterInputHandler} />
            <h3 className={countClass(count)}>{count}</h3>
            <div>
                <button onClick={() => counterHandler(-2)} disabled={count < 3 ? true : null}>-2</button>
                <button onClick={() => counterHandler(-1)} disabled={count < 2 ? true : null}>-</button>
                <button onClick={() => counterHandler(1)} disabled={count > 9 ? true : null} >+</button>
                <button onClick={() => counterHandler(2)} disabled={count > 8 ? true : null}>+2</button>
                <button onClick={() => setCount(countDefault)}>Reset</button>
                <button onClick={addGradeHandler} >Add grade</button>
                <button>Delete all grades</button>
            </div>
            {grades.length > 0 &&
                < ul className='grades-list'>
                    {grades.map((grade, index) => {
                        return <li className={countClass(grade)} key={index}>{grade}</li>
                    })}
                </ul>
            }
        </div >
    )
}

export default CounterPage