import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  userEmail: '',
  token: '',
  isAuthenticated: false,
  error: null,
};

export default createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getCurrentUserSuccess: (state, { payload }) => ({
      ...state,
      userName: payload.name,
      userEmail: payload.email,
      isAuthenticated: true,
    }),

    getCurrentUserError: (state, { payload }) => {
      // console.log('payload :>> ', payload);
      return {
        ...state,
        error: payload.message,
      };
    },

    registerSuccess: (state, { payload }) => ({
      ...state,
      userName: payload.user.name,
      userEmail: payload.user.email,
      token: payload.token,
      isAuthenticated: true,
    }),

    registerError: (state, { payload }) => ({
      ...state,
      error: payload.message,
    }),

    logoutSuccess: () => ({
      ...initialState,
    }),

    logoutError: (state, { payload }) => ({
      ...state,
      error: payload.message,
    }),

    loginSuccess: (state, { payload }) => ({
      ...state,
      userName: payload.user.name,
      userEmail: payload.user.email,
      token: payload.token,
      isAuthenticated: true,
    }),

    loginError: (state, action) => ({
      ...state,
      error: action.payload.error,
    }),

    setErrorNull: (state) => ({
      ...state,
      error: null,
    }),
  },
});
