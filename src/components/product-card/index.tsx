import {
  ManageItemQuantity,
  SkeletonLoader,
  SvgIcon,
  TouchableCustomFeedback,
} from 'components';
import {getPriceStatus, getRatingResult} from 'helpers';
import {useAppSelector} from 'hooks';
import React, {FC} from 'react';
import {ImageBackground, View} from 'react-native';
import {Text} from 'react-native-animatable';
import {useDispatch} from 'react-redux';
import {addCartItem, removeCartItem} from 'slices/productsSlice';
import styles from './styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
interface Props extends Products.Product {
  isLoadingComplete: boolean;
}
export const ProductCard: FC<Props> = ({isLoadingComplete, ...item}) => {
  const dispatch = useDispatch();
  const {title, rating, price, images, brand, stock, id} = item;
  const {cartItems} = useAppSelector(state => state.productsSlice);
  const navigation = useNavigation<NavigationProp<ParamList>>();
  return (
    <SkeletonLoader style={styles.container} isVisible={!isLoadingComplete}>
      <TouchableCustomFeedback
        onPress={() => navigation.navigate('ProductDetails', item)}
        style={styles.container}>
        <ImageBackground
          source={{uri: images?.[0]}}
          style={styles.productImageView}
          imageStyle={styles.productImage}>
          <View style={styles.timeView}>
            <Text style={styles.timeLabel}>{brand}</Text>
          </View>
        </ImageBackground>
        <View style={styles.detailsContainer}>
          <Text numberOfLines={1} style={styles.labelHeading}>
            {title}
          </Text>
          <View style={styles.ratingsView}>
            <View style={styles.nestedRatingView}>
              <SvgIcon name="StarFilled" size={14} />
              <Text style={styles.ratingLabel}>
                {rating} {getRatingResult(rating)}
              </Text>
              <Text> · </Text>
              <Text style={styles.priceLabel}>{stock} Left</Text>
            </View>
          </View>
          <View style={styles.distanceView}>
            <Text style={styles.distanceLabel}>{getPriceStatus(price)}</Text>
            <ManageItemQuantity
              onPressAdd={quantity =>
                dispatch(addCartItem({...item, quantity}))
              }
              onPressRemove={() => dispatch(removeCartItem(item.id))}
              maxQuantity={stock}
              style={styles.quantityView}
              currentQuantity={cartItems.find(item => item.id == id)?.quantity}
            />
          </View>
        </View>
      </TouchableCustomFeedback>
    </SkeletonLoader>
  );
};
