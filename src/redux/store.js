import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  createTransform,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import invoiceReducer from './invoices';
import omit from 'lodash/omit';

const rootReducer = combineReducers({
  invoices: invoiceReducer,
});

let blacklistTransform = createTransform((inboundState, key) => {
  if (key === 'invoices') {
    return omit(inboundState, ['statusFilter']);
  } else {
    return inboundState;
  }
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
  transforms: [blacklistTransform],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
