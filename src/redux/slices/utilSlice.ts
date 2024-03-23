import {createSlice} from '@reduxjs/toolkit';
import {Dimensions, ScaledSize} from 'react-native';

// Define a type for the slice state
interface InitialState {

}

// Define the initial state using that type
const initialState: InitialState = {

};

export const utilSlice = createSlice({
  name: 'utilSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
 
  },
});

export const {

} = utilSlice.actions;
export default utilSlice.reducer;
