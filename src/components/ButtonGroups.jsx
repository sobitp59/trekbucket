import React from "react";
import Button from "./Button";

const ButtonGroups = () => {
  const secondaryButtons = [
    "Mark all as complete",
    "Mark all as incomplete",
    "Reset to initial",
    "Remove all items",
  ];

  return (
    <section className="button-groups">
      {secondaryButtons.map((text) => (
        <Button type="secondary" key={text}>
          {text}
        </Button>
      ))}
    </section>
  );
};

export default ButtonGroups;
