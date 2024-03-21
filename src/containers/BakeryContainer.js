import { useState } from "react";
import Item from "../components/Item";
import BakeryItemsPayload from './BakeryItemsPayload.json';

import './BakeryContainer.css';

const  BakeryContainer = () => {

    const [totalValueSold, setTotalValueSold] = useState(0);

    const sellItem = (price) => {
        setTotalValueSold(totalValueSold + price);
    }

    const bakeryItems = BakeryItemsPayload[0];

    const itemTypes = Object.keys(bakeryItems);
    const items = itemTypes.reduce((acc, type) => {
        acc[type] = bakeryItems[type];
        return acc;
    }, {});



    const displayItems = (type) => {
        return items[type].map((item) => <Item key={item.name} item={item} itemType={type} sellItem={sellItem}/>);
    }

    return (
        <div className="bakery-items">
            <div className="cakes-section">
                <h2>Cakes</h2>
                <div className="display">{displayItems("cakes")}</div>
            </div>
            <div className="pies-section">
                <h2>Pies</h2>
                <div className="display">{displayItems("pies")}</div>
            </div>

            <h2>Total Value Sold: £{totalValueSold}</h2>
        </div>
    );
}
 
export default BakeryContainer;