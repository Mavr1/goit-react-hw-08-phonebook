import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  token: '',
  isAuthenticated: false,
};

export default createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // getCurrentUserRequest,
    // getCurrentUserSuccess,
    // getCurrentUserError,

    registerSuccess: (state, action) => ({
      ...state,
      userName: action.payload.name,
      token: action.payload.token,
      isAuthenticated: true,
    }),

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

    loginSuccess: (state, action) => ({
      ...state,
      userName: action.payload.name,
      token: action.payload.token,
      isAuthenticated: true,
    }),

    loginError: (state, action) => ({
      ...state,
      error: action.payload.error,
    }),
  },
});
