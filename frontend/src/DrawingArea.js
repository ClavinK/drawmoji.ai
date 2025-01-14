import React, { useState, useRef } from "react";
import { ReactSketchCanvas } from 'react-sketch-canvas';
import ToolPanel from './ToolPanel';
import CanvasControls from './CanvasControls';
import './App.css';

const styles = {
  border: '0.0625rem solid #9c9c9c',
  borderRadius: '0.25rem',
};

const Canvas = () => {
  const canvasRef = useRef();
  const [eraseMode, setEraseMode] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [eraserWidth, setEraserWidth] = useState(10);
  const [strokeColor, setStrokeColor] = useState("#000000");

  const handleUndoClick = () => {
    if (canvasRef.current != null) {
      canvasRef.current.undo();
    }
  };

  const handleRedoClick = () => {
    if (canvasRef.current != null) {
      canvasRef.current.redo();
    }
  };

  const handleStrokeColorChange = (event) => {
    setStrokeColor(event.target.value);
  };

  const handleEraserClick = () => {
    setEraseMode(true);
    if (canvasRef.current != null) {
      canvasRef.current.eraseMode(true);
    }
  };

  const handlePenClick = () => {
    setEraseMode(false);
    if (canvasRef.current != null) {
      canvasRef.current.eraseMode(false);
    }
  };

  const handleStrokeWidthChange = (event) => {
    setStrokeWidth(+event.target.value);
  };

  const handleEraserWidthChange = (event) => {
    setEraserWidth(+event.target.value);
  };

  const clearCanvas = () => {
    canvasRef.current.clearCanvas();
  };

  return (
    <>
      <ToolPanel
        handlePenClick={handlePenClick}
        handleEraserClick={handleEraserClick}
        handleUndoClick={handleUndoClick}
        handleRedoClick={handleRedoClick}
        clearCanvas={clearCanvas}
      />
      <CanvasControls
        strokeColor={strokeColor}
        handleStrokeColorChange={handleStrokeColorChange}
        strokeWidth={strokeWidth}
        handleStrokeWidthChange={handleStrokeWidthChange}
        eraseMode={eraseMode}
        eraserWidth={eraserWidth}
        handleEraserWidthChange={handleEraserWidthChange}
      />
      <ReactSketchCanvas
        style={styles}
        width="27em"
        height="27em"
        strokeWidth={strokeWidth}
        eraserWidth={eraserWidth}
        strokeColor={strokeColor}
        ref={canvasRef}
      />
      <button
        className="generate-button"
        onClick={() => {
          canvasRef.current.exportImage("png").then((data) => {
            console.log(data);
          }).catch((e) => {
            console.log(e);
          });
        }}
      >
        Generate
      </button>
    </>
  );
};

function DrawingArea() {
  return (
    <div className="drawing">
      <Canvas />
    </div>
  );
}

export default DrawingArea;