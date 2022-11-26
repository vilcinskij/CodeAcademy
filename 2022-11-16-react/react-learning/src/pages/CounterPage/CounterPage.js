import './CounterPage.css'
import React, { useState } from 'react'

const CounterPage = () => {

    const countDefault = 5;
    const [count, setCount] = useState(countDefault);
    const countColor = count < 5 ? 'red' : 'green';

    function counterHandler(num) {
        setCount(prevState => prevState + num)
    }

    function counterInputHandler(event) {
        setCount(event.target.value)
    }

    return (
        <div id="numbers">
            <input type="number" value={count} onChange={counterInputHandler} />
            <h3 className={countColor}>{count}</h3>
            <div>
                <button onClick={() => counterHandler(-2)} disabled={count < 3 ? true : null}>-2</button>
                <button onClick={() => counterHandler(-1)} disabled={count < 2 ? true : null}>-</button>
                <button onClick={() => counterHandler(1)} disabled={count > 9 ? true : null} >+</button>
                <button onClick={() => counterHandler(2)} disabled={count > 8 ? true : null}>+2</button>
                <button onClick={() => setCount(countDefault)}>RESET</button>
                <button >Įrašyti balą</button>
                <button>Pašalinti įrašus</button>
            </div>
        </div>
    )
}

export default CounterPage