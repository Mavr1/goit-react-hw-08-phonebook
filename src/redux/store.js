// import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contacts/contactsSlice';
import themeSlice from './theme/themeSlice';

export const store = configureStore({
  reducer: { contacts: contactsSlice.reducer, theme: themeSlice.reducer },
});
