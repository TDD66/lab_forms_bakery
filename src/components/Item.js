import './Item.css';

const Item = ({item, itemType, sellItem}) => {

    const {name, ingredients, price, rating} = item;

    const handleSellClick = () => {
        sellItem(price);
    }

    return (
        <div className={itemType}>
            <h1>{name}</h1>
            <h2>Price: £{price}</h2>
            <h2>Rating: {rating}</h2>
            <ul>
                {ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
            </ul>
            <button onClick={handleSellClick}>Sell Item</button>
        </div>
    );
}
 
export default Item;