import { GET_USERS, DELETE_USER } from './types';
import axios from 'axios';

export const getUsers = () => async (dispatch) => {
  const res = await axios.get(`http://localhost:5000/users`);

  dispatch({ type: GET_USERS, payLoad: res.data });
};

export const deleteUser = (id) => async (dispatch) => {
  await axios.get(`http://localhost:5000/users/${id}`);

  dispatch({ type: DELETE_USER, payLoad: id });
};
