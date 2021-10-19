import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


import phoneReducer from './phoneBook/phonebook-reducer';


const myMiddleware = store => next => action => {

  next(action)
}

const rootReducer = combineReducers({
  phoneBook:  phoneReducer,
});


const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
       serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], 
    },
      }),
    myMiddleware,
    logger,
  ],

  devTools: process.env.NODE_ENV === 'development',
});

let persistor = persistStore(store);

const feedbackStore = {
  store,
  persistor,
};

export default feedbackStore;


// const store = configureStore({
//   reducer: rootReducer,

//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        
//       },
//       myMiddleware,
//     }).concat(logger),
//   myMiddleware,
//   devTools: process.env.NODE_ENV === 'development',
// });
// const middleware = [
//   ...getDefaultMiddleware({
//        serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], 
//     },
//   }),
//   myMiddleware,
//     logger,
// ]
// const store = configureStore({
//   reducer: rootReducer,

//   middleware,
//    logger,
//   devTools: process.env.NODE_ENV === 'development',
// });