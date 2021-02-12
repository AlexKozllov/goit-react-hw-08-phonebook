const getIsAuthenticated = (state) => !!state.auth.token;

export { getIsAuthenticated };
