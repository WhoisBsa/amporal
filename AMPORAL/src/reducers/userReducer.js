const initialState = {
  token: '',
  username: '',
  password: '',
  email: '',
  first_name: '',
  last_name: '',
  bio: '',
  instituicao: '',
  data_nascimento: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {...state, token: action.payload.token};
    case 'SET_USERNAME':
      return {...state, username: action.payload.username};
    case 'SET_PASS':
      return {...state, password: action.payload.password};
    case 'SET_EMAIL':
      return {...state, email: action.payload.email};
    case 'SET_FNAME':
      return {...state, first_name: action.payload.first_name};
    case 'SET_LNAME':
      return {...state, last_name: action.payload.last_name};
    case 'SET_BIO':
      return {...state, bio: action.payload.bio};
    case 'SET_INSTITUICAO':
      return {...state, instituicao: action.payload.instituicao};
    case 'SET_DATANASC':
      return {...state, data_nascimento: action.payload.data_nascimento};
    case 'SIGNOUT_REQUEST':
      return {initialState};
    default:
      return state;
  }
};
