// Importing necessary modules and functions
import rootReducer from 'slices'; // Assuming slices contains your combined reducers
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

// Configuring the Redux store
const store = configureStore({
  reducer: rootReducer, // Combined reducers
  devTools: __DEV__, // Conditionally enable dev tools based on environment
  middleware: getDefaultMiddleware =>
    __DEV__
      ? getDefaultMiddleware({ serializableCheck: false }) // Disable serialization check in development
      : getDefaultMiddleware({ serializableCheck: false }), // Disable serialization check in production
});

// Exporting the Redux store
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>; // Define RootState type
export type AppDispatch = typeof store.dispatch; // Define AppDispatch type

// Creating persistor for Redux store
export const persistor = persistStore(store);

// Destructuring getState and dispatch from store for convenience
export const { getState, dispatch } = store;
