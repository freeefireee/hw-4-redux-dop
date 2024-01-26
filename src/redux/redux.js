const initialState = {
    path: '',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_PATH':
        return {
          ...state,
          path: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  