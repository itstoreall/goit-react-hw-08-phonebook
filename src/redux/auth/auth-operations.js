import axios from 'axios';
// import authActions from './auth-actions';

axios.defaults.baseURL = '';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// Register
const register = (credentials) => (dispatch) => {};

// Log in
const logIn = (credentials) => (dispatch) => {};

// Log out
const logOut = () => (dispatch) => {};

// Get Current User
const getCurrentUser = () => (dispatch, getState) => {};

export default { register, logOut, logIn, getCurrentUser }; // eslint-disable-line
