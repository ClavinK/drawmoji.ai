import React from "react";

function Buttons({icon, label, onClick }) {
  return (
  <button onClick={onClick} className="button">
    {icon} {label}
  </button>
  );
}

export default Buttons;
