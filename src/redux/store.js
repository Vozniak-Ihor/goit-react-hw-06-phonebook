// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import rootReducer from 'redux/contactSlice/contactSlice';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persister = persistStore(store);
// // console.log(store);
// export default store;
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
import { configureStore } from '@reduxjs/toolkit';
import contactReducer from 'redux/contactSlice/contactSlice';
import filterReducer from 'redux/filterSlice/filterSlice';

const contactPersistConfig = {
  key: 'contacts',
  storage,
};

const filterPersistConfig = {
  key: 'filter',
  storage,
};

const persistedContactReducer = persistReducer(
  contactPersistConfig,
  contactReducer
);
const persistedFilterReducer = persistReducer(
  filterPersistConfig,
  filterReducer
);

const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filter: persistedFilterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
