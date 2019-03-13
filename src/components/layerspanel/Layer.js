import React from 'react';

export const Layer = (props) => {
  const handleClick = () => {
      props.setActiveLayer(props.id)
  }

  return (
    <div
      className={(props.activeLayer === props.id) ? " layers__row-current" : "layers__row-container"}
      onClick={handleClick}
    >
      {props.id}, {props.type}, {props.size}
    </div>
  );
};
