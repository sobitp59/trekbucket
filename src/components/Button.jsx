import React from "react";

const Button = ({ onClick, butttonType, children }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${butttonType === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
