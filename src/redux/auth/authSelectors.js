const getAuth = (state) => state.auth.isAuthenticated;

const getUserName = (state) => state.auth.userName;

export default { getAuth, getUserName };
