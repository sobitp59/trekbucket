import React from "react";
import AddItemForm from "./AddItemForm";
import ButtonGroups from "./ButtonGroups";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <AddItemForm />
      <ButtonGroups />
    </div>
  );
};

export default Sidebar;
