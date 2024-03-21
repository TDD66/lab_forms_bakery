import { useState } from "react";

const AddItem = ({addNewItem}) => {

const [name, setName] = useState("");
const [ingredients, setIngredients] = useState([]);
const [price, setPrice] = useState(null);
const [rating, setRating] = useState(null);







    return ( 
    <>
    <h2>Add Item</h2>
    <form>
        <input
        type="text"
        name="name"
        placeholder="Enter item name"
        value={name}
        onChange={(event)=> setName(event.target.value)}
        />
         <input/>
         <input/>
         <input/>
    </form>
    



    
    
    
    
    </> );





}
 









export default AddItem;