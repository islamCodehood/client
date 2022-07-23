const reducer = (state = [], action: { type: string; payload: []; }) => {
  switch (action.type) {
    case 'GET_POSTS':
      return action.payload;
    default:
      return state;
  }
}

export default reducer;