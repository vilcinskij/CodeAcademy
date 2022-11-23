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

    let pageTitle = list.length > 0 ? 'Shopping List' : 'No items'

    return (
        <div className="page-content">
            <h2 className="page-title">{pageTitle}</h2>

            <div>
                {renderFunctionList()}
            </div>
        </div>
    )
}