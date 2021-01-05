import { GET_USERS } from '../actions/types';

const initialState = {
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payLoad };
    default:
      return state;
  }
};
