import {AxiosError} from 'axios';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from 'redux/store';
import {
  doGetAllNews,
  doGetTopHeadlinesNews,
  doGetTopHeadlinesSources,
} from 'network';

// Define a type for the slice state
interface InitialState {
  allNewsList: Response.Everything[];
  topHeadlinesList: Response.TopHeadlines[];
  topHeadlinesSourcesList: Response.TopHeadlineSources[];
  topHeadlinesSourcesListWithCategories: Response.TopHeadlines[];
  loadingAllNews: boolean;
  loadingTopHeadlines: boolean;
  loadingTopHeadlinesSources: boolean;
  loadingTopHeadlinesListWithCategories:boolean
}

// Define the initial state using that type
const initialState: InitialState = {
  allNewsList: [],
  topHeadlinesList: [],
  topHeadlinesSourcesList: [],
  topHeadlinesSourcesListWithCategories:[],
  loadingAllNews: false,
  loadingTopHeadlines: false,
  loadingTopHeadlinesSources: false,
  loadingTopHeadlinesListWithCategories:false
};

export const doGetAllNewsList = createAsyncThunk<
  ResponseHandler<Response.Everything[]>,
  RequestOptions.AllNews,
  {
    rejectValue: ValidationErrors;
    state: RootState;
  }
>('news/getAllNews', async (query, {rejectWithValue, getState}) => {
  try {
    const response = await doGetAllNews<ResponseHandler<Response.Everything[]>>(
      query ?? {},
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

export const doGetTopHeadlinesList = createAsyncThunk<
  ResponseHandler<Response.TopHeadlines[]>,
  RequestOptions.TopHeadlines | undefined,
  {
    rejectValue: ValidationErrors;
    state: RootState;
  }
>('news/getTopHeadlines', async (query, {rejectWithValue, getState}) => {
  try {
    const response = await doGetTopHeadlinesNews<
      ResponseHandler<Response.TopHeadlines[]>
    >(query ?? {});
    return response.data;
  } catch (err: any) {
    const error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const doGetTopHeadlinesListWithCategories = createAsyncThunk<
  ResponseHandler<Response.TopHeadlines[]>,
  RequestOptions.TopHeadlines | undefined,
  {
    rejectValue: ValidationErrors;
    state: RootState;
  }
>(
  'news/getTopHeadlinesWithCategories',
  async (query, {rejectWithValue, getState}) => {
    try {
      const response = await doGetTopHeadlinesNews<
        ResponseHandler<Response.TopHeadlines[]>
      >(query ?? {});
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

export const doGetTopHeadlinesNewsSources = createAsyncThunk<
  ResponseHandler<Response.TopHeadlineSources[]>,
  RequestOptions.TopHeadlinesSources,
  {
    rejectValue: ValidationErrors;
    state: RootState;
  }
>(
  'news/getTopHeadlinesNewsSources',
  async (query, {rejectWithValue, getState}) => {
    try {
      const response = await doGetTopHeadlinesSources<
        ResponseHandler<Response.TopHeadlineSources[]>
      >(query ?? {});
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

export const newsSlice = createSlice({
  name: 'newsSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      /* All News Handler  */
      .addCase(doGetAllNewsList.pending, state => {
        state.loadingAllNews = true;
      })
      .addCase(doGetAllNewsList.fulfilled, (state, action) => {
        state.loadingAllNews = false;
        state.allNewsList = action.payload.articles;
      })
      .addCase(doGetAllNewsList.rejected, state => {
        state.loadingAllNews = false;
      })
      /* Top Headlines Handler  */
      .addCase(doGetTopHeadlinesList.pending, state => {
        state.loadingTopHeadlines = true;
      })
      .addCase(doGetTopHeadlinesList.fulfilled, (state, action) => {
        state.loadingTopHeadlines = false;
        state.topHeadlinesList = action.payload.articles;
      })
      .addCase(doGetTopHeadlinesList.rejected, state => {
        state.loadingTopHeadlines = false;
      })
      /* Top Headlines Handler With Categories  */
      .addCase(doGetTopHeadlinesListWithCategories.pending, state => {
        state.loadingTopHeadlinesListWithCategories = true;
      })
      .addCase(doGetTopHeadlinesListWithCategories.fulfilled, (state, action) => {
        state.loadingTopHeadlinesListWithCategories = false;
        state.topHeadlinesSourcesListWithCategories = action.payload.articles;
      })
      .addCase(doGetTopHeadlinesListWithCategories.rejected, state => {
        state.loadingTopHeadlinesListWithCategories = false;
      })
      /* Top Headlines Sources Handler  */
      .addCase(doGetTopHeadlinesNewsSources.pending, state => {
        state.loadingTopHeadlinesSources = true;
      })
      .addCase(doGetTopHeadlinesNewsSources.fulfilled, (state, action) => {
        state.loadingTopHeadlinesSources = false;
        state.topHeadlinesSourcesList = action.payload.articles;
      })
      .addCase(doGetTopHeadlinesNewsSources.rejected, state => {
        state.loadingTopHeadlinesSources = false;
      });
  },
});

export const {} = newsSlice.actions;
export default newsSlice.reducer;
