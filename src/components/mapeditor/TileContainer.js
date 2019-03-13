import React from 'react';
import { useState, useEffect } from 'react';
import { DropTarget } from 'react-dnd';

import { Ctrls } from 'lib/Controls';

const TileContainer = (props) => {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    if (props.currentTool === 'brush') {
      setValue(props.currentSwatch);
    }

    if (props.currentTool === 'eraser') {
      setValue(null);
    }
  }

  const handleMouseover = () => {
    if (!Ctrls.isPressed('shift')) return;

    if (props.currentTool === 'brush') {
      setValue(props.currentSwatch);
    }

    if (props.currentTool === 'eraser') {
      setValue(null);
    }
  }

  const getCurrentCursor = () => {
    if (!props.currentSwatch && props.currentTool === "brush") {
      return "not-allowed";
    }

    if (props.currentTool === 'brush') {
      return "copy";
    }

    if (props.currentTool === "eraser") {
      return "alias";
    }
  }

  let bordersize = (!value) ? "1px solid #1f1f1f" : "1px dashed #1f1f1f";

  return (
    <div
      className="mapeditor__tile__container"
      style={{
        backgroundColor: value,
        borderBottom: bordersize,
        borderRight: bordersize,
      }}
    >
      <button
        className="mapeditor__tile__btn"
        onClick={handleClick}
        onMouseOver={handleMouseover}
        style={{cursor: getCurrentCursor()}}
      >
      </button>
    </div>
  )
}

export default TileContainer;
