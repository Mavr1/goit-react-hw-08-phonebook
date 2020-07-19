import themeSlice from '../theme/themeSlice';
import api from '../../services/api';

export const register = (credentials) => (dispatch, getState) => {
  dispatch(themeSlice.actions.setLoadingTrue());
  api.register(credentials).then((data) => {
    console.log('data :>> ', data);
    api.token.set(data);
    dispatch(themeSlice.actions.registerSuccess(data));
  });
};
