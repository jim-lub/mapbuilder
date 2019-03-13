import React from 'react';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';

import { Ctrls } from 'lib/Controls';
import * as Dom from 'lib/Dom';

import { setCurrentTool } from 'actions';

const Tools = (props) => {

  const handleClick = (toolName) => {
    props.actions.setCurrentTool(toolName);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'b') {
      props.actions.setCurrentTool('brush');
    }

    if (e.key === 'e') {
      props.actions.setCurrentTool('eraser');
    }
  }

  useEffect(() => {
    Dom.newListener().keydown(handleKeyPress);
    return () => Dom.removeListener().keydown(handleKeyPress)
  });

  return (
    <Draggable
      handle=".handle"
    >
    <div className="tools__container">
      <div className="panel__header-container handle">
        <div className="panel__header-title">Tools</div>
      </div>
      <div className="panel__tools-container clearfix">
        <div className="panel__tools-button" style={{border: (props.currentTool === 'brush') ? "solid 1px red" : "solid 1px black"}}>
          <img
            src={require('../../assets/interface/icons/paint-brush.png')}
            alt=""
            style={{width: 48, height: 48, marginTop: 5}}
            onClick={() => handleClick('brush')}
          />
        </div>
        <div className="panel__tools-button" style={{border: (props.currentTool === 'eraser') ? "solid 1px red" : "solid 1px black"}}>
          <img
            src={require('../../assets/interface/icons/eraser.png')}
            alt=""
            style={{width: 48, height: 48, marginTop: 5}}
            onClick={() => handleClick('eraser')}
          />
        </div>
      </div>
    </div>
    </Draggable>
  );
};

const mapStateToProps = (state) => {
 return {
   currentTool: state.tools.currentTool
 };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({setCurrentTool}, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tools);
