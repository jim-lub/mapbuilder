import React from 'react';
import { useState, useEffect } from 'react';
import { DropTarget } from 'react-dnd';

const TileContainer = (props) => {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    setValue('orange');
  }

  useEffect(() => {
    if (!props.getDropResult) return;

    if (props.getDropResult.row !== props.row || props.getDropResult.col !== props.col) return;

    setValue(props.getItem.color);
    console.log(props.getDropResult, props.getItem.color);
  }, [props.getDropResult])

  let bordersize = (!value) ? "1px solid #1f1f1f" : "1px dashed #1f1f1f";

  return props.connectDropTarget(
    <div className="mapeditor__tile__container" style={{backgroundColor: value, borderBottom: bordersize, borderRight: bordersize}}>
      <button className="mapeditor__tile__btn" onClick={handleClick}></button>
    </div>
  )
}

const dropTarget = {
  drop(props) {
    return {
      col: props.col,
      row: props.row
    }
  }
}

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    getItem: monitor.getItem(),
    getDropResult: monitor.getDropResult()
  }
}

export default DropTarget('SWATCH', dropTarget, collect)(TileContainer);
