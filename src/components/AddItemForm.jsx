import React from "react";
import Button from "./Button";
import { useState } from "react";
import { useRef } from "react";
import { useItemsStore } from "../stores/itemsStore";

const AddItemForm = () => {
  const [itemText, setItemText] = useState("");
  const addItem = useItemsStore((state) => state.addItem);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText) {
      alert("Please enter an item");
      inputRef.current.focus();
      return;
    }

    addItem(itemText);
    setItemText("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Toothbrush..."
        onChange={(e) => setItemText(e.target.value)}
        value={itemText}
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
};

export default AddItemForm;
