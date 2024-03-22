import React from "react";
import Button from "./Button";
import { useItemsContext } from "../hooks";

const ButtonGroups = () => {
  const {
    handleMarkAllAsComplete,
    handleMarkAllAsInComplete,
    handleResetToInitial,
    handleRemoveAllItems,
  } = useItemsContext();

  const secondaryButtons = [
    { text: "Mark All As Complete", handler: handleMarkAllAsComplete },
    { text: "Mark All As Incomplete", handler: handleMarkAllAsInComplete },
    { text: "Reset To Initials", handler: handleResetToInitial },
    { text: "Remove All Items", handler: handleRemoveAllItems },
  ];

  return (
    <section className="button-groups">
      {secondaryButtons.map(({ text, handler }) => (
        <Button onClick={handler} type="secondary" key={text}>
          {text}
        </Button>
      ))}
    </section>
  );
};

export default ButtonGroups;
