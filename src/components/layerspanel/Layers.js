import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';

import { NewLayerPanel } from './NewLayerPanel';
import { Layer } from './Layer';

import { createNewTileLayer, setActiveLayer } from 'actions';

const Layers = (props) => {
  const handleClick = (type) => {
    props.actions.createNewTileLayer(type);
  };

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
        <div
          className="panel__tools-button"
          onClick={() => handleClick(16)}
        >
          New 16x16
        </div>
        <div
          className="panel__tools-button"
          onClick={() => handleClick(32)}
        >
          New 32x32
        </div>
        <div
          className="panel__tools-button"
          onClick={() => handleClick(48)}
        >
          New 48x48
        </div>
      </div>
      <div className="panel__content-container">
        {
          props.allLayers.map((data, index) => {
            return <Layer
              key={index}
              id={data.id}
              type={data.type}
              size={data.size}
              activeLayer={props.activeLayer}
              setActiveLayer={props.actions.setActiveLayer}
            />
          })
        }
      </div>
    </div>
    </Draggable>
  )
}

const mapStateToProps = (state) => {
 return {
   activeLayer: state.layers.activeLayer,
   allLayers: state.layers.layers
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({createNewTileLayer, setActiveLayer}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layers);
