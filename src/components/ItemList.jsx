import React from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";
import { useState } from "react";
import { useMemo } from "react";
import { sortingOptions } from "../lib/constants";
import { useItemsContext } from "../hooks";

const ItemList = () => {
  const { items, handleToggleItem, handleDeleteItem } = useItemsContext();
  const [sortBy, setSortBy] = useState("DEFAULT");

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      if (sortBy === "PACKED") {
        return b.packed - a.packed;
      } else if (sortBy === "UNPACKED") {
        return a.packed - b.packed;
      }
      return;
    });
  }, [items, sortBy]);

  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}
      {items.length > 0 ? (
        <section className="sorting">
          {" "}
          <Select
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
            onChange={(options) => setSortBy(options.value)}
          />
        </section>
      ) : null}
      {sortedItems.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default ItemList;

const Item = ({ item }) => {
  const { handleToggleItem, handleDeleteItem } = useItemsContext();
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
