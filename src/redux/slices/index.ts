// import newsSlice from './newsSlice';
import authSlice from './authSlice';
import {combineReducers} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  authSlice,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
