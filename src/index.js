import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import rootReducer from './reducers';

import { App } from './App';

import './css/index.css';
import './css/mapeditor.css';
import './css/panels.css';

const store = createStore(rootReducer);

const startApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <DragDropContextProvider backend={HTML5Backend}>
        <App />
      </DragDropContextProvider>
    </Provider>,
    document.getElementById('root')
  )
};

startApp();
