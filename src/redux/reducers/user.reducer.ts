const reducer = (state = [], action: { type: string; payload: boolean; }) => {
  switch (action.type) {
    case 'LoggedIn':
      return action.payload;
    default:
      return state;
  }
}

export default reducer;