import './CounterPage.css'
import React, { useState } from 'react'

const CounterPage = () => {

    const countDefault = 5;
    const [count, setCount] = useState(countDefault);
    const countColor = count < 5 ? 'red' : 'green'

    function resetHandle() {
        setCount(countDefault)
    };

    function counterHandler(num) {
        setCount(prevState => prevState + num)
    }

    return (
        <div id="numbers">
            <h3 className={countColor}>{count}</h3>
            <button onClick={() => counterHandler(-2)} disabled={count < 3 && true}>-2</button>
            <button onClick={() => counterHandler(-1)} disabled={count < 2 && true}>-</button>
            <button onClick={() => counterHandler(1)} disabled={count > 9 && true} >+</button>
            <button onClick={() => counterHandler(2)} disabled={count > 8 && true}>+2</button>
            <button onClick={resetHandle}>RESET</button>
            <button >Įrašyti balą</button>
            <button>Pašalinti įrašus</button>
        </div>
    )
}

export default CounterPage