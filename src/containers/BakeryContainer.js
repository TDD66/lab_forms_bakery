import { useState } from "react";
import Item from "../components/Item";
import BakeryItemsPayload from './BakeryItemsPayload.json';
import './BakeryContainer.css';
import AddItem from "../components/AddItem";

const  BakeryContainer = () => {

    const [totalValueSold, setTotalValueSold] = useState(0);

    const [filterTerm, setFilterTerm] = useState("");

    const sellItem = (price) => {
        setTotalValueSold(totalValueSold + price);
    }

    const [items, setItems] = useState(BakeryItemsPayload);

    var itemsList = items.map((item) => <Item key={item.name} item={item} sellItem={sellItem}/>);

    const addNewItem = (newItem) => {
        setItems([...items, newItem]);
    }

    const filterItems = (() => {
        let filterItemsList = items.filter(items => {items.name.toLowerCase().includes(filterTerm.toLowerCase)});
        console.log(filterItemsList);
        itemsList =  filterItemsList.map((item) => <Item key={item.name} item={item} sellItem={sellItem}/>);
        console.log(itemsList);
    });

    return (
        <>
            <div className="search">
                <form id="filter-items-form" onSubmit={filterItems}>
                    <label htmlFor="filter-term">Search:</label>
                    <input 
                    id="filter-term" 
                    type="text"
                    onChange={(event)=> setFilterTerm(event.target.value)}
                    />
                    <input type="submit"/>
                </form>
            </div>

            <div className="add-item">
                <AddItem addNewItem={addNewItem}/>
            </div>
            <div className="bakery-items">
                <div className="cakes-section">
                    <h2>Cakes</h2>
                    <div className="display">{itemsList}</div>
                </div>
            </div>
            <h2>Total Value Sold: £{totalValueSold}</h2>
        </>
    );
}
 
export default BakeryContainer;