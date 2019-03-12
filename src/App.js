import React from 'react';

import {
  MapEditor,
  CurrentSwatch,
  Layers,
  Library
} from './components';

export const App = () => {
  return (
    <div className="wrapper">
      <div className="mapeditor__wrapper">
      {<MapEditor />}
      </div>
      <div className="layers__wrapper">{<CurrentSwatch />}</div>
      <div className="library__wrapper">{<Library />}</div>
    </div>
  )
}
