import React, { useState } from 'react'


const CounterPage = () => {

    const [num, setNum] = useState(6)

    function numHandle() {
        setNum(num - 2)
    }

    return (
        <div id="numbers">
            <h3>{num}</h3>
            <button onClick={numHandle}>-2</button>
            <button>-</button>
            <button>+</button>
            <button>+2</button>
            <button>RESET</button>
            <button>Įrašyti balą</button><button>Pašalinti įrašus</button>
        </div>
    )
}

export default CounterPage