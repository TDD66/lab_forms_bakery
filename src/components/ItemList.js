import Item from "./Item";

const ItemList = ({ items, sellItem }) => {
  const itemComponent = items.map((item) => <Item key={item.name} item={item} sellItem={sellItem}/>);


  return <div className="display">{itemComponent}</div>;
};

export default ItemList;
