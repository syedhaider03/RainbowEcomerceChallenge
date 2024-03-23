import React, {useEffect, useState} from 'react';
import {AnyAction, AsyncThunkAction, Dispatch, createSelector} from '@reduxjs/toolkit';
import {AppDispatch, RootState} from 'redux/store';
import {PaginationMetaType, wrapForLoader} from 'helpers';
import {FlatListProps} from 'react-native';
import {useAppSelector} from './useAppSelector';
import {useAppDispatch} from './useAppDispatch';
import {setPaginationRefreshId} from 'slices/utilSlice';
import {RefreshController} from 'helpers/UIFunctions';

/* 
TODO:
Add a condition to reset the state completely when a refresh of refetch call is triggered when page number is 1
*/
interface PaginationOptions {
  initialPage?: number;
  limit?: number;
}

interface PaginationState<T> {
  data: T[];
  loading: boolean;
  error: string | null;
  meta: PaginationMetaType;
  initialLoading: boolean;
}

type LoadMoreCallback = () => void;

type LoadMoreFunction = (page: number, limit: number) => Promise<any>;

type UsePaginationResult<T> = PaginationState<T> & {
  handleLoadMore: LoadMoreCallback;
  renderFooter: () => any;
  paginationProps: Partial<FlatListProps<T>>;
  resetPageAndReload: () => void;
  currentPage: number;
};

const refreshPaginationTypeHandler = createSelector(
  [(state: RootState) => state.utilSlice],
  state => state.refreshPaginationType
)
export const usePagination = <T>(
  loadMore: LoadMoreFunction,
  loader: React.ReactNode,
  InitialData: T[] = [],
  id: string,
  options: PaginationOptions = {},
): UsePaginationResult<T> => {
  const {initialPage = 1, limit = 10} = options;
  const [page, setPage] = useState<number>(initialPage); // Initialize the page state with 1
  const [state, setState] = useState<PaginationState<T>>({
    data: InitialData,
    loading: false,
    error: null,
    meta: {} as PaginationMetaType,
    initialLoading: false,
  });
  const refreshPaginationType = useAppSelector(refreshPaginationTypeHandler);
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const handleLoadMore: LoadMoreCallback = () => {
    if (
      state.loading ||
      parseFloat(state.meta.currentPage) >= parseFloat(state.meta.totalPages)
    ) {
      return undefined;
    }
    if (
      state.data.length > 0 &&
      parseFloat(state.meta.currentPage) <= parseFloat(state.meta.totalPages)
    ) {
      setPage(prev => ++prev);
      setState(prevState => ({...prevState, loading: true}));
    }
  };

  const renderFooter = () => {
    if (!state.loading) {
      return undefined;
    }
    return loader;
  };

  const resetPageAndReload = (isRefreshControl?: boolean) => {
    if (isRefreshControl) {
      setRefreshing(true);
    }
    if (page == 1) {
      setState(prevState => ({
        ...prevState,
        initialLoading: true,
        data: [],
      }));
      fetchData(1);
    }
    setPage(1);
    setRefreshing(false);
  };

  const fetchData = async (pageNo?: number) => {
    try {
      if (page == 1) {
        setState(prevState => ({
          ...prevState,
          initialLoading: true,
          data: [],
        }));
      }
      //@ts-ignore
      const newData = await loadMore(pageNo ?? page, limit)?.unwrap();
      console.log({newData});
      const meta = newData.meta as PaginationMetaType;
      if (parseFloat(meta.currentPage) <= parseFloat(meta.totalPages)) {
        setState(prevState => ({
          data: [...prevState.data, ...newData.data],
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
      setState(prevState => ({
        ...prevState,
        loading: false,
        error: error.message,
        initialLoading: false,
      }));
    }
  };

  useEffect(() => {
    if (refreshPaginationType !== '' && id === refreshPaginationType) {
      setState(prevState => ({
        ...prevState,
        initialLoading: true,
        data: [],
      }));
      if (page == 1) fetchData(1);
      setPage(1);
      dispatch(setPaginationRefreshId(''));
    }
  }, [refreshPaginationType]);

  useEffect(() => {
    if (state.data.length === 0) {
      setState(prevState => ({
        ...prevState,
        initialLoading: true,
      }));
    }
    if (page == 1) {
      setPage(1);
      fetchData(1);
    }
    else fetchData();
  }, [page, limit]);

  return {
    ...state,
    data: state.initialLoading ? wrapForLoader(state.data, 12) : state.data,
    handleLoadMore,
    renderFooter,
    resetPageAndReload,
    currentPage: page,
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
