import React from 'react';
import { DragSource } from 'react-dnd';

const Swatch = ({connectDragSource, color, onClick}) => {
  return connectDragSource(
    <div
      className="swatch"
      style={{backgroundColor: color}}
      onClick={() => onClick(color)}
    >
    </div>
  )
};

const dragSource = {
  beginDrag(props) {
    return {
      color: props.color
    }
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

export default DragSource('SWATCH', dragSource, collect)(Swatch);
