import { useState } from "react"
import ShoppingItem from "../../components/ShoppingItem/ShoppingItem"

export default function ShoppingPage() {
    const [shoppingList, setShoppingList] = useState([]);
    const [shoppingInput, setShoppingInput] = useState("");
    const [shoppingInputDone, setShoppingInputDone] = useState(false);


    const submitHandler = (event) => {
        event.preventDefault();
        let input = event.target.elements['shopping-input'].value;
        let done = event.target.elements['shopping-input-done'].checked;

        console.dir(done);

        let shoppingItemData = {
            title: input,
            done: done
        }

        setShoppingList(prevState => [shoppingItemData, ...prevState]);
        setShoppingInput("");
        setShoppingInputDone(false)
    }

    function renderFunctionList() {
        let listElement = shoppingList.map((element, index) => {
            return <ShoppingItem key={index} data={element} />
        })
        return listElement
    }

    let pageTitle = shoppingList.length > 0 ? 'Shopping List' : 'No items'

    return (
        <div className="page-content">
            <h2 className="page-title">{pageTitle}</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="shopping-input">Enter your item</label>
                    <input
                        type='text'
                        name="shopping-input"
                        id="shopping-input"
                        value={shoppingInput}
                        onChange={(e) => setShoppingInput(e.target.value)}
                    />
                    <input type='submit' value={'Add item'} />
                </div>
                <div>
                    <label htmlFor="shopping-input-done">Done:</label>
                    <input
                        type='checkbox'
                        name="shopping-input-done"
                        id="shopping-input-done"
                        checked={shoppingInputDone}
                        onChange={(e) => setShoppingInputDone(e.target.checked)}
                    />
                </div>
            </form>

            <div>
                {renderFunctionList()}
            </div>
        </div>
    )
}