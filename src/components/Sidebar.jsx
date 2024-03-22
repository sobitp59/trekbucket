import React from "react";
import AddItemForm from "./AddItemForm";
import ButtonGroups from "./ButtonGroups";

const Sidebar = ({
  handleAddItem,
  handleMarkAllAsComplete,
  handleMarkAllAsInComplete,
  handleResetToInitial,
  handleRemoveAllItems,
}) => {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroups
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsInComplete={handleMarkAllAsInComplete}
        handleResetToInitial={handleResetToInitial}
        handleRemoveAllItems={handleRemoveAllItems}
      />
    </div>
  );
};

export default Sidebar;
