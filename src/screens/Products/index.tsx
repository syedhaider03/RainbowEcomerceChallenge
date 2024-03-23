import React, {FC, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {Loader, ProductCard} from 'components';
import {ViewAllHeader} from 'components/view-all-header';
// import TabPills from 'components/tab-pills';
import {useAppDispatch, useAppSelector} from 'hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from './styles';
import TabPills from 'components/tab-pills';
import SearchComponent from 'components/search';

interface Item {}

const ItemSeparator = () => <View style={styles.separator} />;
const ListHeaderComponent = () => <View style={styles.listHeader} />;

export const Products: FC<NativeStackScreenProps<ParamList, 'Products'>> = ({
  route,
  navigation,
}) => {
  const [activeTab, setActiveTab] = useState<string>('smartphones');

  const dispatch = useAppDispatch();
  // const {

  // } = useAppSelector(store => store.newsSlice);

  useEffect(() => {}, []);

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  const renderItem = ({item}: {item: any}) => <ProductCard />;
  return (
    <View style={styles.container}>
      <View style={styles.topViewContainer}>
        <SearchComponent/>
        <TabPills
          tabs={categories}
          activeTab={activeTab}
          onTabPress={handleTabPress}
        />
        <ViewAllHeader onPressViewAll={() => {}} title={activeTab} />
        {false ? (
          <Loader />
        ) : (
          <FlatList
            data={new Array(10).fill({})}
            renderItem={renderItem}
            keyExtractor={item => item.publishedAt}
            contentContainerStyle={styles.flatListContent}
            ItemSeparatorComponent={() => <View style={styles.separatorLg} />}
          />
        )}
      </View>
    </View>
  );
};

const categories = [
  'All Products',
  'smartphones',
  'laptops',
  'fragrances',
  'skincare',
  'groceries',
  'home-decoration',
  'furniture',
  'tops',
  'womens-dresses',
  'womens-shoes',
  'mens-shirts',
  'mens-shoes',
  'mens-watches',
  'womens-watches',
  'womens-bags',
  'womens-jewellery',
  'sunglasses',
  'automotive',
  'motorcycle',
  'lighting',
];
