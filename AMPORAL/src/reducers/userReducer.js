const initialState = {
  token: 'teste',
  name: 'matheus',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.payload.name};
    default:
      break;
  }
  console.log('State: ', state);
  return state;
};
