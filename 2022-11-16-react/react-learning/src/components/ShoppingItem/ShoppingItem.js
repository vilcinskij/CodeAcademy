import { useState } from "react";

export default function ShoppingItem({ data: { title, done } }) {

    const [isDone, setIsDone] = useState(done);

    function doneHandler() {
        setIsDone(!isDone);
    }

    let buttonText;
    !isDone ? buttonText = 'Add' : buttonText = 'Remove';

    return (
        <div className='shoppingItem'>
            <button onClick={doneHandler}>{buttonText}</button>
            <span>{isDone && ' ✔ ' }{title}</span>
        </div>
    )
}
