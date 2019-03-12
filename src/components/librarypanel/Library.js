import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';

import Swatch from './Swatch';

const Library = (props) => {
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
        {<Swatch color="orange" />}
        {<Swatch color="blue" />}
        {<Swatch color="teal" />}
        {<Swatch color="green" />}
        {<Swatch color="yellow" />}
      </div>
    </div>
    </Draggable>
  )
}

const mapStateToProps = (state) => {
 return {

 }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);
