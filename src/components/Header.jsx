import React from "react";
import Logo from "./Logo";
import ItemCounter from "./ItemCounter";

const Header = ({ totalItemCount, totalItemPacked }) => {
  return (
    <header>
      <Logo />
      <ItemCounter
        totalItemCount={totalItemCount}
        totalItemPacked={totalItemPacked}
      />
    </header>
  );
};

export default Header;
