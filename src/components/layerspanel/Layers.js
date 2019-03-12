import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';

const Layers = (props) => {
  return (
    <Draggable
      handle=".handle"
      position={null}
    >
    <div className="layers__container">
      <div className="panel__header-container handle">
        <div className="panel__header-title">Layers</div>
      </div>
      <div className="panel__tools-container clearfix">
        <div className="panel__tools-button">New</div>
        <div className="panel__tools-button">Del</div>
      </div>
      <div className="panel__content-container">
        Data<br />
        Data<br />
        Data<br />
        Data<br />
        Data<br />
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

export default connect(mapStateToProps, mapDispatchToProps)(Layers);
