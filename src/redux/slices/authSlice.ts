import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {Dimensions, ScaledSize} from 'react-native';
import {RootState} from 'redux/store';
import {patterns} from 'utils/constants';

interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}

// Define a type for the slice state
interface InitialState {
  user: any;
  signupLoader: boolean;
  loginLoader: boolean;
  profileUpdatingInProgress:boolean
  profileImageUploadLoader:boolean
}

// Define the initial state using that type
const initialState: InitialState = {
  user: {},
  signupLoader: false,
  loginLoader: false,
  profileUpdatingInProgress:false,
  profileImageUploadLoader:false
};

export const doLoginUser = createAsyncThunk<
  Auth.Response,
  Omit<Auth.LoginPayload, 'fcm_token'>,
  {
    rejectValue: ValidationErrors;
    state: RootState;
  }
>('user/login', async (userData, {rejectWithValue, getState}) => {
  try {
    const {email, password} = userData;
    if (!email || !password) {
      throw 'Both fields are required*';
    }
    if (!patterns.EMAIL_GENERAL.test(email)) {
      throw 'Email must be in a valid format.';
    }
    // const response = await doPostLogin<Auth.Response>({...userData, fcm_token});
    // return response.data;
    return {} as any;
  } catch (err: any) {
    const error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const doImageUpload = createAsyncThunk<
  any,
  FormData,
  {
    rejectValue: ValidationErrors;
  }
>('user/imageUpload', async (data, {rejectWithValue}) => {
  try {
    // const response = await doPostEventImageUpload<API.NewResponse>(data);
    // return response.data;
    return {};
  } catch (err: any) {
    const error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const doSignupUser = createAsyncThunk<
  Auth.Response,
  Omit<Auth.SignupPayload, 'fcm_token'>,
  {
    rejectValue: ValidationErrors;
    state: RootState;
  }
>('user/signup', async (userData, {rejectWithValue, getState}) => {
  try {
    const {name, email, password, terms_and_conditions, role} = userData;
    if (name.length < 2) {
      throw "Full Name shouldn't contain any symbol, should contain only and at least 2 letters";
    }
    if (!patterns.FULLNAME.test(name)) {
      throw "Full Name shouldn't contain any symbol, should contain only and at least 2 letters";
    }
    if (!patterns.EMAIL_GENERAL.test(email)) {
      throw 'Email must be in a valid format.';
    }
    if (!patterns.PASSWORD.test(password)) {
      throw 'Password should be minimum 6 letters containing at least one numeric digit, one uppercase and one lowercase letter';
    }
    if (terms_and_conditions !== 1) {
      throw 'Please accept our terms & conditions';
    }
    // const response = await doPostSignup<Auth.Response>({});
    // return response.data;
    return {} as any;
  } catch (err: any) {
    const error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const utilSlice = createSlice({
  name: 'authSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: builder => {
    /*
     * Signup Handler
     */
    builder
      .addCase(doSignupUser.pending, (state, action) => {
        state.signupLoader = true;
      })
      .addCase(doSignupUser.fulfilled, (state, {payload}) => {
        state.signupLoader = false;
        // if (!payload.status) {
        //   showToast(payload.messege);
        //   return;
        // }
        state.user = {
          ...payload.data,
          isMerchantPartner: false,
        };

        // httpPrivateService.privateAgent.defaults.headers.common[
        //   'Authorization'
        // ] = payload.Response.auth_token;
      })
      .addCase(doSignupUser.rejected, (state, action) => {
        state.signupLoader = false;
        console.log(action.error);
      });
    /*
     * Login Handler
     */
    builder
      .addCase(doLoginUser.pending, (state, action) => {
        state.loginLoader = true;
      })
      .addCase(doLoginUser.fulfilled, (state, {payload}) => {
        state.loginLoader = false;
        state.user = {
          ...payload.data,
          isMerchantPartner: !!payload.data.company_name,
        };
      })
      .addCase(doLoginUser.rejected, (state, action) => {
        state.loginLoader = false;
        console.log(action.error);
      });
  },
});

export const {} = utilSlice.actions;
export default utilSlice.reducer;
