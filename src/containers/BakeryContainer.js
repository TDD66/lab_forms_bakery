import { useState } from "react";
import Item from "../components/Item";
import BakeryItemsPayload from './BakeryItemsPayload.json';

import './BakeryContainer.css';

const  BakeryContainer = () => {

    const [totalValueSold, setTotalValueSold] = useState(0);

    const sellItem = (price) => {
        setTotalValueSold(totalValueSold + price);
    }

    const items = BakeryItemsPayload;

    const displayItems = (type) => {
        return items.map((item) => <Item key={item.name} item={item} itemType={type} sellItem={sellItem}/>);
    }

    return (
        <div className="bakery-items">
            <div className="cakes-section">
                <h2>Cakes</h2>
                <div className="display">{displayItems("cakes")}</div>
            </div>
            <h2>Total Value Sold: £{totalValueSold}</h2>
        </div>
    );
}
 
export default BakeryContainer;