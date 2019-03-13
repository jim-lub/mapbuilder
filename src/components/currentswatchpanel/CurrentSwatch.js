import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';

import Swatch from 'components/librarypanel/Swatch';

const CurrentSwatch = (props) => {
  return (
    <Draggable
      handle=".handle"
      position={null}
    >
    <div className="layers__container">
      <div className="panel__header-container handle">
        <div className="panel__header-title">Current Swatch</div>
      </div>
      <div className="panel__content-container clearfix">
        {<Swatch color={props.currentSwatch} />}
        {<Swatch color={props.currentSwatch} />}
        {<Swatch color={props.currentSwatch} />}
      </div>
    </div>
    </Draggable>
  )
}

const mapStateToProps = (state) => {
 return {
   currentSwatch: state.swatches.currentSwatch
 }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentSwatch);
