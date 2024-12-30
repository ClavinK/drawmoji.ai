import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import DrawingArea from "./DrawingArea";
import Output from "./Output";

function App() {
  return (
    <div className="screen">
      <DrawingArea />
      <Output />
    </div>
  );
}

export default App;
