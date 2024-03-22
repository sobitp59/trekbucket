import React from "react";
import Button from "./Button";
import { useItemsContext } from "../hooks";
import { useItemsStore } from "../stores/itemsStore";

const ButtonGroups = () => {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsInComplete = useItemsStore(
    (state) => state.markAllAsInComplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItem = useItemsStore((state) => state.removeAllItem);

  const secondaryButtons = [
    { text: "Mark All As Complete", handler: markAllAsComplete },
    { text: "Mark All As Incomplete", handler: markAllAsInComplete },
    { text: "Reset To Initials", handler: resetToInitial },
    { text: "Remove All Items", handler: removeAllItem },
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
