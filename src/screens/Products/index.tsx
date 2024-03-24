import React, {FC, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {Loader, ProductCard} from 'components';
import {ViewAllHeader} from 'components/view-all-header';
import {useAppDispatch, useAppSelector, usePagination} from 'hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from './styles';
import TabPills from 'components/tab-pills';
import SearchComponent from 'components/search';
import {PAGINATION_ID} from 'utils/constants';
import {doGetAllProductsList, doGetCategoriesList} from 'slices/productsSlice';


export const Products: FC<NativeStackScreenProps<ParamList, 'Products'>> = ({
  route,
  navigation,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const dispatch = useAppDispatch();
  const {categoriesLoading, categoriesList} = useAppSelector(
    state => state.productsSlice,
  );

  const {data, initialLoading, paginationProps, resetPageAndReload} =
    usePagination<Products.Product>(
      ({limit, skip}) =>
        dispatch(
          doGetAllProductsList({
            skip,
            limit,
            category: !searchQuery
              ? activeTab == 'all'
                ? undefined
                : activeTab
              : undefined,
            q: !!searchQuery ? searchQuery : undefined,
          }),
        ),
      <Loader />,
      [],
      PAGINATION_ID.ProductsList,
    );

  useEffect(() => {
    dispatch(doGetCategoriesList());
  }, []);

  useEffect(() => {
    resetPageAndReload();
  }, [activeTab, searchQuery]);

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
    setSearchQuery('');
  };

  const onSearch = (query: string) => {
    setSearchQuery(query);
  };

  const renderItem = ({item}: {item: Products.Product}) => (
    <ProductCard {...item} isLoadingComplete={initialLoading} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.topViewContainer}>
        <SearchComponent onSearch={onSearch} />
        <TabPills
          tabs={categoriesList}
          activeTab={activeTab}
          onTabPress={handleTabPress}
          isLoadingComplete={categoriesLoading}
        />
        <ViewAllHeader onPressViewAll={() => {}} title={activeTab} />
      </View>
      <FlatList
        {...paginationProps}
        data={data}
        extraData={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContent}
        ItemSeparatorComponent={() => <View style={styles.separatorLg} />}
      />
    </View>
  );
};
