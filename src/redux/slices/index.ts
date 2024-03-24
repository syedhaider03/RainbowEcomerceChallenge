// import newsSlice from './newsSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authSlice from './authSlice';
import {combineReducers} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import productsSlice from './productsSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const persistCartConfig = {
  key: 'orders',
  storage: AsyncStorage,
  whitelist: ['cartItems'],
};

const persistedReducer = persistReducer(persistConfig, authSlice);
const persistedProductsReducer = persistReducer(persistCartConfig, productsSlice);
const rootReducer = combineReducers({
  authSlice: persistedReducer,
  productsSlice: persistedProductsReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
