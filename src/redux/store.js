import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import contactsSlice from './contacts/contactsSlice';
import themeSlice from './theme/themeSlice';
import authSlice from './auth/authSlice';

const persistConfigToken = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistConfigTheme = {
  key: 'theme',
  storage,
  whitelist: ['currentTheme'],
};

const persistedAuthReducer = persistReducer(
  persistConfigToken,
  authSlice.reducer
);

const persistedThemeReducer = persistReducer(
  persistConfigTheme,
  themeSlice.reducer
);

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    theme: persistedThemeReducer,
    auth: persistedAuthReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
