import React from "react";
import EmptyView from "./EmptyView";

const ItemList = ({ items, handleDeleteItem, handleToggleItem }) => {
  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}
      {items.map((item) => (
        <Item
          item={item}
          key={item.id}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
        />
      ))}
    </ul>
  );
};

export default ItemList;

const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => onToggleItem(item.id)}
          type="checkbox"
          checked={item.packed}
        />{" "}
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};
