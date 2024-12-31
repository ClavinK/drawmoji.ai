import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import DrawingArea from "./DrawingArea";
import Output from "./Output";
import Popup from "./PaintbrushPopup"

function App() {
  return (
    <div className="screen">
      <DrawingArea />
      <Output />
      <Popup />
    </div>
  );
}

export default App;
