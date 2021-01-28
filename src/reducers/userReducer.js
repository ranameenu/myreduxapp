import { GET_USERS, DELETE_USER } from '../actions/types';

const initialState = {
  users: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payLoad };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payLoad),
      };
    default:
      return state;
  }
};
