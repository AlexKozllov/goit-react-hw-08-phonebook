const getIsAuthenticated = (state) => !!state.auth.token;
const getError = (state) => !!state.auth.error;

export { getIsAuthenticated, getError };
