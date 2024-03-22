import React from "react";

const ItemList = ({ items, handleDeleteItem, handleToggleItem }) => {
  return (
    <ul className="item-list">
      {items.map((item) => (
        <Item
          item={item}
          key={item.id}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
      ))}
    </ul>
  );
};

export default ItemList;

const Item = ({ item, handleDeleteItem, handleToggleItem }) => {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => handleToggleItem(item.id)}
          type="checkbox"
          checked={item.packed}
        />{" "}
        {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
};
