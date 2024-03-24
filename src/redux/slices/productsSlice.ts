import {toast} from '@backpackapp-io/react-native-toast';
import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {
  doGetAllCategories,
  doGetAllProducts,
  doGetFilteredProducts,
  doGetSearchedProducts,
} from 'network';
import {RootState} from 'redux/store';

// Define a type for the slice state
interface InitialState {
  productsList: Products.Product[];
  productsLoading: boolean;
  categoriesList: Products.Category[];
  categoriesLoading: boolean;
  refreshPaginationType: string;
}

// Define the initial state using that type
const initialState: InitialState = {
  productsList: [],
  productsLoading: false,
  categoriesList: [],
  categoriesLoading: false,
  refreshPaginationType: '',
};

export const doGetAllProductsList = createAsyncThunk<
  Products.Response,
  Pick<Products.QueryParams, 'limit' | 'select' | 'skip' | 'category' | 'q'>,
  {
    rejectValue: ValidationErrors;
    state: RootState;
  }
>('products/getAllProducts', async (query, {rejectWithValue, getState}) => {
  try {
    console.log({query})
    let response;
    if (query.q)
      response = await doGetSearchedProducts<Products.Response>(query);
    if (query.category)
      response = await doGetFilteredProducts<Products.Response>(query.category);
    else response = await doGetAllProducts<Products.Response>(query);
    return response.data;
  } catch (err: any) {
    const error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const doGetCategoriesList = createAsyncThunk<
  Products.Category[],
  undefined,
  {
    rejectValue: ValidationErrors;
    state: RootState;
  }
>('products/getAllCategories', async (_, {rejectWithValue, getState}) => {
  try {
    const response = await doGetAllCategories<Products.Category[]>();
    return response.data;
  } catch (err: any) {
    const error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const doGetFilteredProductsList = createAsyncThunk<
  Products.Response,
  string,
  {
    rejectValue: ValidationErrors;
    state: RootState;
  }
>(
  'products/getFilteredCategories',
  async (category, {rejectWithValue, getState}) => {
    try {
      const response = await doGetFilteredProducts<Products.Response>(category);
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

export const doGetSearchedProductsList = createAsyncThunk<
  Products.Response,
  Products.QueryParams,
  {
    rejectValue: ValidationErrors;
    state: RootState;
  }
>('products/getSearchProducts', async (query, {rejectWithValue, getState}) => {
  try {
    const response = await doGetSearchedProducts<Products.Response>(query);
    return response.data;
  } catch (err: any) {
    const error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const productsSlice = createSlice({
  name: 'productsSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPaginationRefreshId: (state, action: PayloadAction<string>) => {
      state.refreshPaginationType = action.payload;
    },
  },
  extraReducers: builder => {
    /*
     * Get All Products Handler
     */
    builder
      .addCase(doGetAllProductsList.pending, (state, action) => {
        state.productsLoading = true;
      })
      .addCase(doGetAllProductsList.fulfilled, (state, {payload}) => {
        state.productsLoading = false;
        state.productsList = payload.products;
      })
      .addCase(doGetAllProductsList.rejected, (state, action) => {
        state.productsLoading = false;
        console.log(action.error);
        toast.error(action.error.message as string);
      });
    /*
     * Get All Categories Handler
     */
    builder
      .addCase(doGetCategoriesList.pending, (state, action) => {
        state.categoriesLoading = true;
      })
      .addCase(doGetCategoriesList.fulfilled, (state, {payload}) => {
        state.categoriesLoading = false;
        state.categoriesList = ['all', ...payload];
      })
      .addCase(doGetCategoriesList.rejected, (state, action) => {
        state.categoriesLoading = false;
        toast.error(action.error.message as string);
        console.log(action.error);
      });
    /*
     * Search Products Handler
     */
    builder
      .addCase(doGetSearchedProductsList.pending, (state, action) => {
        state.productsLoading = true;
      })
      .addCase(doGetSearchedProductsList.fulfilled, (state, {payload}) => {
        state.productsLoading = false;
        state.productsList = payload.products;
      })
      .addCase(doGetSearchedProductsList.rejected, (state, action) => {
        state.productsLoading = false;
        console.log(action.error);
      });
    /*
     * Filtered Products Handler
     */
    builder
      .addCase(doGetFilteredProductsList.pending, (state, action) => {
        state.productsLoading = true;
      })
      .addCase(doGetFilteredProductsList.fulfilled, (state, {payload}) => {
        state.productsLoading = false;
        state.productsList = payload.products;
      })
      .addCase(doGetFilteredProductsList.rejected, (state, action) => {
        state.productsLoading = false;
        console.log(action.error);
        toast.error(action.error.message as string);
      });
  },
});

export const {setPaginationRefreshId} = productsSlice.actions;
export default productsSlice.reducer;
