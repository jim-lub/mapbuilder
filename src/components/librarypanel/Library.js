import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';

import Swatch from './Swatch';

import { setCurrentSwatch } from 'actions';

const Library = (props) => {

  const handleClick = (swatchName) => {
    props.actions.setCurrentSwatch(swatchName)
  }

  return (
    <Draggable
      handle=".handle"
      position={null}
    >
    <div className="library__container">
      <div className="panel__header-container handle">
        <div className="panel__header-title">Library</div>
      </div>
      <div className="panel__content-container clearfix">
        {<Swatch color="orange" onClick={handleClick} />}
        {<Swatch color="red" onClick={handleClick} />}
        {<Swatch color="skyblue" onClick={handleClick} />}
        {<Swatch color="crimson" onClick={handleClick} />}
        {<Swatch color="olive" onClick={handleClick} />}
        {<Swatch color="blue" onClick={handleClick} />}
        {<Swatch color="teal" onClick={handleClick} />}
        {<Swatch color="green" onClick={handleClick} />}
        {<Swatch color="yellow" onClick={handleClick} />}
      </div>
    </div>
    </Draggable>
  );
};

const mapStateToProps = (state) => {
 return {

 };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({setCurrentSwatch}, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Library);
