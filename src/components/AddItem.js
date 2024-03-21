import { useState } from "react";

const AddItem = ({addNewItem}) => {

    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = {name, ingredients, price, rating};
        addNewItem(newItem);
    }



    return ( 
    <>
        <h2>Add Item</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            placeholder="Enter item name"
            value={name}
            onChange={(event)=> setName(event.target.value)}
            />
            <input
                type="text"
                name="ingredients"
                placeholder="Enter ingredients"
                value={ingredients}
                onChange={(event)=> setIngredients(event.target.value.split(","))}
            />
            <input
            type="number"
            name="price"
            placeholder="Enter item price"
            value={price}
            onChange={(event)=> setPrice(parseInt(event.target.value))}
            />
            <input
            type="number"
            name="rating"
            placeholder="Enter item rating"
            value={rating}
            onChange={(event)=> setRating(parseInt(event.target.value))}
            />
            <input type="submit" value="submit"/>
        </form>
    
    </> );





}
 









export default AddItem;