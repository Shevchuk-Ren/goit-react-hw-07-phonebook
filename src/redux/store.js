import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
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

import storage from 'redux-persist/lib/storage';
import phoneReducer from './phoneBook/phonebook-reducer';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  phoneBook: persistReducer(persistConfig, phoneReducer),
});

const store = configureStore({
  reducer: rootReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

let persistor = persistStore(store);

const feedbackStore = {
  store,
  persistor,
};

export default feedbackStore;
