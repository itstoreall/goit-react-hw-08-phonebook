const getIsAuthenticated = (state) => Boolean(state.auth.token);

const getUsername = (state) => state.auth.user.name;

// eslint-disable-next-line
export default {
  getIsAuthenticated,
  getUsername,
};
