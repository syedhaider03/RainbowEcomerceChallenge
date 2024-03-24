import {toast} from '@backpackapp-io/react-native-toast';
import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {
  doGetAllCategories,
  doGetAllProducts,
  doGetFilteredProducts,
  doGetSearchedProducts,
  doPostOrder,
} from 'network';
import {RootState} from 'redux/store';

// Define a type for the slice state
interface InitialState {
  productsList: Products.Product[];
  productsLoading: boolean;
  categoriesList: Products.Category[];
  categoriesLoading: boolean;
  refreshPaginationType: string;
  cartItems: Products.CartItem[];
  orderLoading: boolean;
}

// Define the initial state using that type
const initialState: InitialState = {
  productsList: [],
  productsLoading: false,
  categoriesList: [],
  categoriesLoading: false,
  refreshPaginationType: '',
  cartItems: [],
  orderLoading: false,
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
    console.log({query});
    let response;
    if (query.q)
      response = await doGetSearchedProducts<Products.Response>(query);
    else if (query.category)
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

export const doPostAOrder = createAsyncThunk<
  Order.Payload,
  Products.CartItem[],
  {
    rejectValue: ValidationErrors;
    state: RootState;
  }
>('product/order', async (data, {rejectWithValue, getState}) => {
  try {
    const payload = {
      [getState().authSlice.user.id]: data,
    };
    const response = await doPostOrder<Order.Payload>(payload);
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
    addCartItem: (state, action: PayloadAction<Products.CartItem>) => {
      const itemIndex = state.cartItems.findIndex(
        item => item.id === action.payload.id,
      );
      if (itemIndex != -1) {
        state.cartItems[itemIndex] = action.payload;
      } else state.cartItems = [...state.cartItems, action.payload];
    },
    removeCartItem: (state, action: PayloadAction<number>) => {
      console.log({action});
      state.cartItems = state.cartItems.filter(
        item => item.id != action.payload,
      );
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
    /*
     * Order Product Handler
     */
    builder
      .addCase(doPostAOrder.pending, (state, action) => {
        state.orderLoading = true;
      })
      .addCase(doPostAOrder.fulfilled, (state, {payload}) => {
        state.orderLoading = false;
        state.cartItems = [];
        toast.success('Order has been submitted successfully.');
      })
      .addCase(doPostAOrder.rejected, (state, action) => {
        state.orderLoading = false;
        console.log(action.error);
        toast.error(action.error.message as string);
      });
  },
});

export const {setPaginationRefreshId, addCartItem, removeCartItem} =
  productsSlice.actions;
export default productsSlice.reducer;
