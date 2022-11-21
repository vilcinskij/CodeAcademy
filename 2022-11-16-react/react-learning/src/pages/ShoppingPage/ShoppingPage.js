import ShoppingItem from "../../components/ShoppingItem/ShoppingItem"

export default function ShoppingPage() {
    const list = [
        {
            title: 'Bread',
            done: false
        },
        {
            title: 'Butter',
            done: true
        },
        {
            title: 'Apples',
            done: false
        },
        {
            title: 'Water',
            done: true
        },
        {
            title: 'Eggs',
            done: true
        }

    ]

    function renderFunctionList() {
        let listElement = list.map((element, index) => {
            return <ShoppingItem key={index} title={element.title} />
        })
        return listElement
    }

    return (
        <div>
            <h1>Shopping List</h1>
            {renderFunctionList()}
        </div>
    )
}