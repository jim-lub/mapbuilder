import React from 'react';

import {
  MapEditor,
  CurrentSwatch,
  Layers,
  Library,
  Tools
} from './components';

export const App = () => {
  return (
    <div className="wrapper">
      <div className="mapeditor__wrapper">
      {<MapEditor />}
      </div>
      <div className="toolstart__wrapper">
        <div className="swatch__wrapper">{<CurrentSwatch />}</div>
        <div className="layers__wrapper">{<Layers />}</div>
        <div className="library__wrapper">{<Library />}</div>
        <div className="tools__wrapper">{<Tools />}</div>
      </div>
    </div>
  )
}
