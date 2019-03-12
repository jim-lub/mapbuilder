import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TileContainer from './TileContainer';

import { CFG } from 'config/CONSTANTS';

const MapEditor = (props) => {
  const arr = createArrayWithAllColumns();

  console.log(arr);

  return (
    <div className="mapeditor__container clearfix">
      {
        arr.map((v, i) => {
          return <Column key={i} col={i} rows={v} />
        })
      }
    </div>
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

const Column = (props) => {
  return (
    <div className="mapeditor__column__container">
      {
        props.rows.map((v, i) => {
          return <TileContainer key={i} col={props.col} row={i} />
        })
      }
    </div>
  )
}

const createArrayWithAllColumns = () => {
  return Array(CFG.MAP_COLS)
    .fill(null)
    .map((v, i) => createArrayWithAllRowsPerColumn(i));
}

const createArrayWithAllRowsPerColumn = (col) => {
  return Array(CFG.MAP_ROWS)
    .fill(null)
    .map((v, i) => [col, i]);
}

export default connect(mapStateToProps, mapDispatchToProps)(MapEditor);
