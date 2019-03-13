import { combineReducers } from 'redux';

import tools from './tools';
import swatches from './swatches';
import layers from './layers';

export default combineReducers({
  tools,
  swatches,
  layers
});
