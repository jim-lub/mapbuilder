export default (state = {
  layers: [],
  activeLayer: null
}, action) => {
  switch (action.type) {
    case 'CREATE_NEW_TILE_LAYER':
      return {
        ...state,
        layers: [...state.layers, ...[{id: action.payload._id, type: 'tile', size: action.payload.tileSize}]]
      };
    case 'SET_ACTIVE_LAYER':
      return {
        ...state,
        activeLayer: action.payload.id
      }
    default:
      return state;
  }
}
