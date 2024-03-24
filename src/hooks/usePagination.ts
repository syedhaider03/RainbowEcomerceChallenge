import React, {useEffect, useState} from 'react';
import {createSelector} from '@reduxjs/toolkit'; // Importing necessary dependencies
import {AppDispatch, RootState} from 'redux/store'; // Importing store types
import {wrapForLoader} from 'helpers'; // Importing helper function
import {FlatListProps} from 'react-native'; // Importing FlatListProps type from react-native
import {useAppSelector} from './useAppSelector'; // Importing custom selector hook
import {useAppDispatch} from './useAppDispatch'; // Importing custom dispatch hook
import {setPaginationRefreshId} from 'slices/productsSlice'; // Importing action creator from Redux slice
import {RefreshController} from 'helpers/UIFunctions'; // Importing helper function for refresh control

// Define types and interfaces
interface PaginationOptions {
  initialPage?: number;
  limit?: number;
}
type PaginationMetaType = Omit<Products.Response, 'products'>;

interface PaginationState<T> {
  data: T[];
  loading: boolean;
  error: string | null;
  meta: PaginationMetaType;
  initialLoading: boolean;
}

type LoadMoreCallback = () => void;

type LoadMoreFunction = ({}: Products.QueryParams) => Promise<any>;

type UsePaginationResult<T> = PaginationState<T> & {
  handleLoadMore: LoadMoreCallback;
  renderFooter: () => any;
  paginationProps: Partial<FlatListProps<T>>;
  resetPageAndReload: () => void;
  currentPage: number;
};

// Selector to get refresh pagination type from Redux state
const refreshPaginationTypeHandler = createSelector(
  [(state: RootState) => state.productsSlice],
  state => state.refreshPaginationType,
);

const getCurrentPage = (meta: PaginationMetaType) => meta.skip / meta.limit + 1;
const getTotalPages = (meta: PaginationMetaType) =>
  Math.ceil(meta.total / meta.limit);

// Custom hook for pagination
export const usePagination = <T>(
  loadMore: LoadMoreFunction,
  loader: React.ReactNode,
  InitialData: T[] = [],
  id: string,
  options: PaginationOptions = {},
): UsePaginationResult<T> => {
  // Destructuring options or providing default values
  const {initialPage = 0, limit = 10} = options;

  // State variables using useState hook
  const [page, setPage] = useState<number>(initialPage); // Current page state
  const [state, setState] = useState<PaginationState<T>>({
    data: InitialData, // Initial data state
    loading: false, // Loading state
    error: null, // Error state
    meta: {} as PaginationMetaType, // Pagination metadata state
    initialLoading: false, // Initial loading state
  });

  // Selecting refresh pagination type from Redux state
  const refreshPaginationType = useAppSelector(refreshPaginationTypeHandler);
  const dispatch = useAppDispatch(); // Getting dispatch function from custom hook
  const [refreshing, setRefreshing] = useState(false); // State for refresh control

  // Callback function to handle loading more data
  const handleLoadMore: LoadMoreCallback = () => {
    // Check if already loading or reached last page
    if (
      state.loading ||
      getCurrentPage(state.meta) >= getTotalPages(state.meta)
    ) {
      return undefined; // If true, do nothing
    }
    // If there is more data and not reached last page
    if (
      state.data.length > 0 &&
      getCurrentPage(state.meta) <= getTotalPages(state.meta)
    ) {
      setPage(prev => ++prev); // Increment page
      setState(prevState => ({...prevState, loading: true})); // Set loading state
    }
  };

  // Function to render footer component
  const renderFooter = () => {
    if (!state.loading) {
      return undefined; // If not loading, return nothing
    }
    return loader; // Otherwise, return loader component
  };

  // Function to reset page and reload data
  const resetPageAndReload = (isRefreshControl?: boolean) => {
    if (isRefreshControl) {
      setRefreshing(true); // If refresh control triggered, set refreshing state
    }
    // Reset states and fetch data for first page
    if (page == 0) {
      setState(prevState => ({
        ...prevState,
        initialLoading: true,
        data: [],
      }));
      fetchData(0);
    }
    setPage(0); // Reset page to 1
    setRefreshing(false); // Reset refreshing state
  };

  // Function to fetch data asynchronously
  const fetchData = async (pageNo?: number) => {
    try {
      // If current page is 1, reset states and fetch data for first page
      if (page == 0) {
        setState(prevState => ({
          ...prevState,
          initialLoading: true,
          data: [],
        }));
      }
      // Fetch data based on current page and limit
      const newData = await loadMore({
        skip: (pageNo ?? page) * 10,
        limit,
        // @ts-ignore
      })?.unwrap();
      // Extract metadata from fetched data
      const meta = {
        limit: newData.limit,
        skip: newData.skip,
        total: newData.total,
      } as PaginationMetaType;
      // Update state with new data
      if (getCurrentPage(meta) <= getTotalPages(meta)) {
        setState(prevState => ({
          data: [...prevState.data, ...newData.products],
          loading: false,
          error: null,
          meta,
          initialLoading: false,
        }));
      } else {
        setState(prevState => ({
          ...prevState,
          loading: false,
          meta,
          initialLoading: false,
        }));
      }
    } catch (error: any) {
      // If error occurs, update state with error message
      setState(prevState => ({
        ...prevState,
        loading: false,
        error: error.message,
        initialLoading: false,
      }));
    }
  };

  // Effect to handle refreshing when refresh pagination type changes
  useEffect(() => {
    if (refreshPaginationType !== '' && id === refreshPaginationType) {
      // If refresh pagination type matches id, reset states and fetch data for first page
      setState(prevState => ({
        ...prevState,
        initialLoading: true,
        data: [],
      }));
      if (page == 1) fetchData(0);
      setPage(1); // Reset page to 1
      dispatch(setPaginationRefreshId(''));
    }
  }, [refreshPaginationType]); // Trigger effect when refresh pagination type changes

  // Effect to fetch data when page or limit changes
  useEffect(() => {
    // If no data is present, set initial loading state to true
    if (state.data.length === 0) {
      setState(prevState => ({
        ...prevState,
        initialLoading: true,
      }));
    }
    // If current page is 1, fetch data for first page
    if (page == 1) {
      setPage(1); // Reset page to 1
      fetchData(1);
    } else fetchData(); // Otherwise, fetch data for current page
  }, [page, limit]);
  return {
    ...state,
    // Wrap data with loader if initial loading
    data: state.initialLoading ? wrapForLoader(state.data, 12) : state.data,
    handleLoadMore,
    renderFooter,
    resetPageAndReload,
    currentPage: page,
    // Props for FlatList component
    paginationProps: {
      ListFooterComponent: renderFooter as React.ComponentType<any>,
      onEndReached: handleLoadMore,
      scrollEnabled: !state.initialLoading,
      onEndReachedThreshold: 0.4,
      scrollsToTop: true,
      refreshControl: RefreshController(refreshing, () => resetPageAndReload()),
    },
  };
};
