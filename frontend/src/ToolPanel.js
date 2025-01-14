import React from 'react';
import Buttons from './Buttons';
import Paintbrush from "./images/paintbrush.png";
import Paintbucket from "./images/paintbucket.png";
import Eraser from "./images/erase.png";
import Reset from "./images/reset.png";
import Undo from "./images/undo.png";
import Redo from "./images/redo.png";

function ToolPanel({ handlePenClick, handleEraserClick, handleUndoClick, handleRedoClick, clearCanvas }) {
  const buttonsConfig = [
    {
      icon: <img src={Paintbrush} alt="Paintbrush" className="icon" />,
      onClick: handlePenClick,
      isPaintbrush: true,
    },
    {
      icon: <img src={Paintbucket} alt="Paintbucket" className="icon" />,
      onClick: () => console.log("Paintbucket Clicked"),
    },
    {
      icon: <img src={Eraser} alt="Eraser" className="icon" />,
      onClick: handleEraserClick,
    },
    {
      icon: <img src={Undo} alt="Undo" className="icon" />,
      onClick: handleUndoClick,
    },
    {
      icon: <img src={Redo} alt="Redo" className="icon" />,
      onClick: handleRedoClick,
    },
    {
      icon: <img src={Reset} alt="Reset" className="icon" />,
      onClick: clearCanvas,
    },
  ];

  return (
    <div className="tool-buttons">
        {buttonsConfig.map((button, index) => <Buttons
            key={index}
            icon={button.icon}
            onClick={button.onClick} />
        )}
    </div>
  );
}

export default ToolPanel;