import React from "react";

function Button({icon, label, onClick }) {
  return (
  <button onClick={onClick} className="button">
    {icon} {label}
  </button>
  );
}

export default Button;
