import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  userEmail: '',
  token: '',
  isAuthenticated: true,
  error: null,
};

export default createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // getCurrentUserRequest,
    // getCurrentUserSuccess,
    // getCurrentUserError,

    registerSuccess: (state, { payload }) => {
      return {
        ...state,
        userName: payload.user.name,
        userEmail: payload.user.email,
        token: payload.token,
        isAuthenticated: true,
      };
    },

    registerError: (state, action) => ({
      ...state,
      error: action.payload.error,
    }),

    logoutSuccess: () => ({
      ...initialState,
    }),

    logoutError: (state, action) => ({
      ...state,
      error: action.payload.error,
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
  },
});
