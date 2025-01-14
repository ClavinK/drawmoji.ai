import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";  

function CanvasControls({ strokeColor, handleStrokeColorChange, strokeWidth, handleStrokeWidthChange, eraseMode, eraserWidth, handleEraserWidthChange }) {
  return (
    <>
      <div className="color">
        <label htmlFor="color">Stroke Color: </label>
        <input
          type="color"
          value={strokeColor}
          onChange={handleStrokeColorChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="strokeWidth" className="form-label">
          Stroke Width:
        </label>
        <input
          disabled={eraseMode}
          type="range"
          className="form-range"
          min="1"
          max="20"
          step="1"
          id="strokeWidth"
          value={strokeWidth}
          onChange={handleStrokeWidthChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="eraserWidth" className="form-label">
          Eraser Width:
        </label>
        <input
          disabled={!eraseMode}
          type="range"
          className="form-range"
          min="1"
          max="20"
          step="1"
          id="eraserWidth"
          value={eraserWidth}
          onChange={handleEraserWidthChange}
        />
      </div>
    </>
  );
}

export default CanvasControls;