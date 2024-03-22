import React from "react";

const ItemCounter = ({ totalItemCount, totalItemPacked }) => {
  return (
    <p className="counter">
      <b>{totalItemPacked}</b> / {totalItemCount} items packed
    </p>
  );
};

export default ItemCounter;
