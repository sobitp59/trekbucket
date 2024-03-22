import React from "react";

const ItemCounter = ({ totalItemPacked, totalItemCount }) => {
  return (
    <p className="counter">
      <b>{totalItemPacked}</b> / {totalItemCount} items packed
    </p>
  );
};

export default ItemCounter;
