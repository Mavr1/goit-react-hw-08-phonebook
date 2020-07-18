import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTheme: 'light',
  isLoading: false,
};

export default createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state) =>
      state.currentTheme === 'light'
        ? { currentTheme: 'dark' }
        : { currentTheme: 'light' },
    setLoadingTrue: (state) => ({ ...state, isLoading: true }),
    setLoadingFalse: (state) => ({ ...state, isLoading: false }),
  },
});
