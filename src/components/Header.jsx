import React from "react";
import Logo from "./Logo";
import ItemCounter from "./ItemCounter";
import { useItemsContext } from "../hooks";
import { useItemsStore } from "../stores/itemsStore";

const Header = () => {
  const items = useItemsStore((state) => state.items);
  return (
    <header>
      <Logo />
      <ItemCounter
        totalItemPacked={items.filter((item) => item.packed).length}
        totalItemCount={items.length}
      />
    </header>
  );
};

export default Header;
