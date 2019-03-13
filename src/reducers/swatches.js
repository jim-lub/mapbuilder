export default (state = {
  currentSwatch: null
}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_SWATCH':
      return {
        ...state,
        currentSwatch: action.payload
      };
    default:
      return state;
  }
}
