import {toast} from '@backpackapp-io/react-native-toast';
import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {
  doGetAllUsers,
  doPostSignup,
  doPostUploadImage,
  doPutUserProfile,
} from 'network';
import {RootState} from 'redux/store';
import {patterns} from 'utils/constants';

interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}

// Define a type for the slice state
interface InitialState {
  user: Auth.Response;
  signupLoader: boolean;
  loginLoader: boolean;
  updateProfileLoader: boolean;
  profileUpdatingInProgress: boolean;
  profileImageUploadLoader: boolean;
}

// Define the initial state using that type
const initialState: InitialState = {
  user: {} as Auth.Response,
  signupLoader: false,
  loginLoader: false,
  profileUpdatingInProgress: false,
  profileImageUploadLoader: false,
  updateProfileLoader: false,
};

export const doLoginUser = createAsyncThunk<
  Auth.Response,
  Auth.LoginPayload,
  {
    rejectValue: ValidationErrors;
    state: RootState;
  }
>('user/login', async (userData, {rejectWithValue, dispatch}) => {
  try {
    const {email, password} = userData;
    if (!email || !password) {
      throw 'Both fields are required*';
    }
    if (!patterns.EMAIL_GENERAL.test(email)) {
      throw 'Email must be in a valid format.';
    }
    /* check if user exist */
    const data = (await dispatch(
      doVerifyUserExist({email, password, isLoginVerification: true}),
    ).unwrap()) as Auth.Response;
    if (data) {
      return data;
    } else throw 'Invalid email or password!';
  } catch (err: any) {
    const error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const doImageUpload = createAsyncThunk<
  ByteScale.imageUploadResponse,
  FormData,
  {
    rejectValue: ValidationErrors;
  }
>('user/imageUpload', async (data, {rejectWithValue}) => {
  try {
    const response = await doPostUploadImage<ByteScale.imageUploadResponse>(
      data,
    );
    return response.data;
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
  Auth.SignupPayload,
  {
    rejectValue: ValidationErrors;
    state: RootState;
  }
>('user/signup', async (userData, {rejectWithValue, getState, dispatch}) => {
  try {
    const {name, email, password} = userData;
    if (name.length < 2) {
      throw 'Full Name should contain at least 2 letters';
    }
    if (!patterns.FULLNAME.test(name)) {
      throw "Full Name shouldn't contain any symbol, should contain at least 2 letters";
    }
    if (!patterns.EMAIL_GENERAL.test(email)) {
      throw 'Email must be in a valid format.';
    }
    if (password.length < 6) {
      throw 'Password should be minimum 6 letters';
    }
    /* check if user already exist with email */
    const isUserExist = await dispatch(
      doVerifyUserExist({email, password, isLoginVerification: false}),
    ).unwrap();
    /* throw error if true */
    if (isUserExist) {
      throw 'User with this email already exist!';
    }
    const response = await doPostSignup<Auth.Response>(userData);
    return response.data;
  } catch (err: any) {
    const error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const doUpdateUserProfile = createAsyncThunk<
  Auth.Response,
  Omit<Auth.SignupPayload, 'email'>,
  {
    rejectValue: ValidationErrors;
    state: RootState;
  }
>(
  'user/updateProfile',
  async (userData, {rejectWithValue, getState, dispatch}) => {
    try {
      const {name, password, picture} = userData;
      if (name.length < 2) {
        throw 'Full Name should contain at least 2 letters';
      }
      if (!patterns.FULLNAME.test(name)) {
        throw "Full Name shouldn't contain any symbol, should contain at least 2 letters";
      }
      if (password.length < 6) {
        throw 'Password should be minimum 6 letters';
      }
      const response = await doPutUserProfile<Auth.Response>(
        {
          ...getState().authSlice.user,
          name,
          password,
          picture,
        },
        getState()?.authSlice?.user?.id,
      );
      return response.data;
    } catch (err: any) {
      const error: AxiosError<ValidationErrors> = err;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const doVerifyUserExist = createAsyncThunk<
  boolean | Auth.Response,
  Auth.VerifyUser,
  {
    rejectValue: ValidationErrors;
    state: RootState;
  }
>('user/verify', async (userData, {rejectWithValue, getState}) => {
  try {
    const response = await doGetAllUsers<Auth.Response[]>();
    const {email, password, isLoginVerification} = userData;
    const data = response.data;
    /*
      Because of having a CRUD server, need to manually fetch all
      users list, and trying to find out the logged In user existence
     */
    if (isLoginVerification) {
      const userData = data.find(
        item => item.email == email && item.password == password,
      );
      if (userData) {
        return userData;
      } else return false;
    } else if (data.find(item => item.email == email)) {
      return true;
    } else return false;
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
  reducers: {
    doLogout: (state, action: PayloadAction<undefined>) => {
      state.user = {} as Auth.Response;
    },
  },
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
        state.user = payload;
      })
      .addCase(doSignupUser.rejected, (state, action) => {
        state.signupLoader = false;
        console.log(action.error);
        toast.error(action.error.message as string);
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
        state.user = payload;
      })
      .addCase(doLoginUser.rejected, (state, action) => {
        state.loginLoader = false;
        toast.error(action.error.message as string);
        console.log(action.error);
      });
    /*
     * Image Upload Handler
     */
    builder
      .addCase(doImageUpload.pending, (state, action) => {
        state.profileImageUploadLoader = true;
      })
      .addCase(doImageUpload.fulfilled, (state, {payload}) => {
        state.profileImageUploadLoader = false;
      })
      .addCase(doImageUpload.rejected, (state, action) => {
        state.profileImageUploadLoader = false;
        console.log(action.error);
      });
    /*
     * Update Profile Handler
     */
    builder
      .addCase(doUpdateUserProfile.pending, (state, action) => {
        state.updateProfileLoader = true;
      })
      .addCase(doUpdateUserProfile.fulfilled, (state, {payload}) => {
        state.updateProfileLoader = false;
        state.user = payload;
        toast.success("Profile has been updated successfully!");
      })
      .addCase(doUpdateUserProfile.rejected, (state, action) => {
        state.updateProfileLoader = false;
        console.log(action.error);
        toast.error(action.error.message as string);
      });
  },
});

doUpdateUserProfile;
export const {doLogout} = utilSlice.actions;
export default utilSlice.reducer;
