import api from '../../services/api';
import themeSlice from '../theme/themeSlice';
import authSlice from './authSlice';

export const register = (credentials) => (dispatch) => {
  dispatch(themeSlice.actions.setLoadingTrue());
  api
    .register(credentials)
    .then((data) => {
      api.token.set(data.data.token);
      dispatch(authSlice.actions.registerSuccess(data.data));
      dispatch(authSlice.actions.setErrorNull());
    })
    .catch((error) => dispatch(authSlice.actions.registerError(error)))
    .finally(dispatch(themeSlice.actions.setLoadingFalse()));
};

export const login = (credentials) => (dispatch) => {
  dispatch(themeSlice.actions.setLoadingTrue());
  api
    .login(credentials)
    .then((data) => {
      api.token.set(data.data.token);
      dispatch(authSlice.actions.loginSuccess(data.data));
      dispatch(authSlice.actions.setErrorNull());
    })
    .catch((error) => dispatch(authSlice.actions.registerError(error)))
    .finally(dispatch(themeSlice.actions.setLoadingFalse()));
};

export const logOut = () => (dispatch) => {
  dispatch(themeSlice.actions.setLoadingTrue());
  api
    .logout()
    .then(() => {
      api.token.unset();
      dispatch(authSlice.actions.logoutSuccess());
      dispatch(authSlice.actions.setErrorNull());
    })
    .catch((error) => dispatch(authSlice.actions.logoutError(error)))
    .finally(dispatch(themeSlice.actions.setLoadingFalse()));
};

// export const getCurrentUser = () => (dispatch, getState) => {
//   const {
//     auth: { token: persistedToken },
//   } = getState();

//   if (!persistedToken) {
//     return;
//   }

//   token.set(persistedToken);
//   dispatch(authActions.getCurrentUserRequest());

//   axios
//     .get('/users/current')
//     .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
//     .catch(error => authActions.getCurrentUserError(error));
// };
