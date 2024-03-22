import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { initialItems } from "../lib/constants";

export const ItemsContext = createContext();

const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  );

  const handleAddItem = (newItemText) => {
    const newItem = { id: Date.now(), name: newItemText, packed: false };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });

    setItems(newItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: true }));
    setItems(newItems);
  };

  const handleMarkAllAsInComplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: false }));
    setItems(newItems);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const values = {
    items,
    handleAddItem,
    handleDeleteItem,
    handleToggleItem,
    handleMarkAllAsComplete,
    handleMarkAllAsInComplete,
    handleResetToInitial,
    handleRemoveAllItems,
  };

  return (
    <ItemsContext.Provider value={values}>{children}</ItemsContext.Provider>
  );
};

export default ItemsContextProvider;
