import api from '../../services/api';
import themeSlice from '../theme/themeSlice';
import authSlice from './authSlice';

export const register = (credentials) => (dispatch) => {
  dispatch(themeSlice.actions.setLoadingTrue());
  api.register(credentials).then((data) => {
    api.token.set(data.data.token);
    dispatch(authSlice.actions.registerSuccess(data.data));
    dispatch(themeSlice.actions.setLoadingFalse());
  });
};

export const login = (credentials) => (dispatch) => {
  dispatch(themeSlice.actions.setLoadingTrue());
  api.login(credentials).then((data) => {
    api.token.set(data.data.token);
    dispatch(authSlice.actions.loginSuccess(data.data));
    dispatch(themeSlice.actions.setLoadingFalse());
  });
};
