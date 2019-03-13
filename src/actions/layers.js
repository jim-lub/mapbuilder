export const createNewTileLayer = (tileSize) => {
  return {
    type: 'CREATE_NEW_TILE_LAYER',
    payload: {
      tileSize,
      _id: ID()
    }
  }
}

export const setActiveLayer = (id) => {
  return {
    type: 'SET_ACTIVE_LAYER',
    payload: {
      id
    }
  }
}

const ID = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};
