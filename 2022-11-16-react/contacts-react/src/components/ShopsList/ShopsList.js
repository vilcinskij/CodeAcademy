import './ShopsList.css';
import ShopItem from "../ShopItem/ShopItem";


export default function shopsList() {
    const shopsArr = [
        {
            title: 'Parduotuvė 1',
            phone: '+37045648879',
            email: 'shop1@parduotuve.lt',
            address: 'Arsenalo g. 5, Vilnius 01143'
        },
        {
            title: 'Parduotuvė 2',
            phone: '+37045648879',
            email: 'shop2@parduotuve.lt',
            address: ' Arsenalo g. 5, Vilnius 01143'
        },
        {
            title: 'Parduotuvė 3',
            phone: '+37045648879',
            email: 'shop3@parduotuve.lt',
            address: ' Arsenalo g. 5, Vilnius 01143'
        },
        {
            title: 'Parduotuvė 4',
            phone: '+37045648879',
            email: 'shop4@parduotuve.lt',
            address: ' Arsenalo g. 5, Vilnius 01143'
        }
    ];

    return (
        <ul className="shops-list"> 
            <ShopItem
                title="Parduotuvė 1"
                phone="+37045648879"
                email="shop1@parduotuve.lt"
                address="Arsenalo g. 5, Vilnius 01143"
            ></ShopItem>    
             <ShopItem
                title="Parduotuvė 1"
                phone="+37045648879"
                email="shop1@parduotuve.lt"
                address="Arsenalo g. 5, Vilnius 01143"
            ></ShopItem>  
             <ShopItem
                title="Parduotuvė 1"
                phone="+37045648879"
                email="shop1@parduotuve.lt"
                address="Arsenalo g. 5, Vilnius 01143"
            ></ShopItem>  
             <ShopItem
                title="Parduotuvė 1"
                phone="+37045648879"
                email="shop1@parduotuve.lt"
                address="Arsenalo g. 5, Vilnius 01143"
            ></ShopItem>      
        </ul>
    )
}

