import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger'; // Don't delete
import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts';
// import { authReducer } from './auth';

// Thunk ловит функции, которые вместо объектов
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger, // Don't delete
];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor }; // eslint-disable-line
