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
