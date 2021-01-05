import { GET_USERS } from './types';
import axios from 'axios';

export const getUsers = async (dispatch) => {
  const res = await axios.get(`http://localhost:5000/users`);
  dispatch({ type: GET_USERS, payLoad: res.data });
};
