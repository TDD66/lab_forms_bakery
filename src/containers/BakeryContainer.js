import { useState } from "react";
import BakeryItemsPayload from './BakeryItemsPayload.json';
import './BakeryContainer.css';
import AddItem from "../components/AddItem";
import ItemList from "../components/ItemList";

const  BakeryContainer = () => {

    const [totalValueSold, setTotalValueSold] = useState(0);

    const [filterTerm, setFilterTerm] = useState("");

    const sellItem = (price) => {
        setTotalValueSold(totalValueSold + price);
    }

    const [items, setItems] = useState(BakeryItemsPayload);

    const [allItems, setAllItems] = useState(BakeryItemsPayload);

    const addNewItem = (newItem) => {
        setAllItems([...allItems, newItem]);
    }

    const filterItems = (filterTerm) => {
        if(filterTerm === ""){
            return allItems;
        }
        return allItems.filter(item => item.name.toLowerCase().includes(filterTerm.toLowerCase()));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setItems(filterItems(filterTerm));
    }


    return (
        <>
            <div className="search">
            <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="search-bar"
            placeholder="Enter item name"
            value={filterTerm}
            onChange={(event)=> setFilterTerm(event.target.value)}
            />
            <input type="submit" value="submit"/>
                </form>
            </div>

            <div className="add-item">
                <AddItem addNewItem={addNewItem}/>
            </div>
            <div className="bakery-items">
                <div className="cakes-section">
                    <h2>Cakes</h2>
                    <ItemList items={items} sellItem={sellItem}/>
                </div>
            </div>
            <h2>Total Value Sold: £{totalValueSold}</h2>
        </>
    );
}
 
export default BakeryContainer;