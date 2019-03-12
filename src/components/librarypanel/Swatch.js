import React from 'react';
import { DragSource } from 'react-dnd';

const Swatch = ({connectDragSource, color}) => {
  return connectDragSource(
    <div className="swatch" style={{backgroundColor: color}}>
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
