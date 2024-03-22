import React, { useState } from "react";

import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { initialItems } from "./lib/constants";

const App = () => {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (newItemText) => {
    const newItem = { id: Date.now(), name: newItemText, packed: false };
    const newItems = [newItem, ...items];
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

  console.log(items);
  return (
    <>
      <BackgroundHeading />

      <main>
        <Header
          totalItemCount={items.length}
          totalItemPacked={items.filter((item) => item.packed).length}
        />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsInComplete={handleMarkAllAsInComplete}
          handleResetToInitial={handleResetToInitial}
          handleRemoveAllItems={handleRemoveAllItems}
        />
      </main>

      <Footer />
    </>
  );
};

export default App;
