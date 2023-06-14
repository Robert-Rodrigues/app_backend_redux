import { createStore } from 'redux';

// Defina as ações (actions) que podem ser disparadas na sua aplicação
const actionTypes = {
  SET_POSTS: 'SET_POSTS',
};

// Defina o estado inicial da sua aplicação
const initialState = {
  posts: [],
};

// Crie um reducer para manipular o estado com base nas ações disparadas
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

// Crie a store passando o reducer e o estado inicial
const store = createStore(reducer);

export { actionTypes, store };
