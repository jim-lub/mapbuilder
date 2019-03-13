export default (state = {
  currentTool: 'brush'
}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_TOOL':
      return {
        ...state,
        currentTool: action.payload
      };
    default:
      return state;
  }
}
