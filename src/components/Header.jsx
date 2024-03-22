import React from "react";
import Logo from "./Logo";
import ItemCounter from "./ItemCounter";
import { useItemsContext } from "../hooks";

const Header = () => {
  const { items } = useItemsContext();
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
