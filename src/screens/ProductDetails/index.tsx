import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Button,
  Carousel,
  DescriptionText,
  HeadingSmall,
  ManageItemQuantity,
  SvgIcon,
} from 'components';
import {HDP, RF, WiP, getPriceStatus, getRatingResult} from 'helpers';
import {useAppSelector} from 'hooks';
import React, {FC, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {addCartItem, removeCartItem} from 'slices/productsSlice';
import {family, palette} from 'theme';

export const ProductDetails: FC<
  NativeStackScreenProps<ParamList, 'ProductDetails'>
> = ({navigation, route}) => {
  const productDetails = route.params;
  const dispatch = useDispatch();
  const {cartItems} = useAppSelector(state => state.productsSlice);

  useEffect(() => {
    navigation.setOptions({headerTitle: productDetails.title});
  }, []);

  const isAddedToCart = !!cartItems.find(item => item.id == productDetails.id);
  console.log({isAddedToCart});
  const onAddToCart = () => {
    if (!isAddedToCart) dispatch(addCartItem({...productDetails, quantity: 1}));
    else dispatch(removeCartItem(productDetails.id));
  };
  return (
    <View style={styles.container}>
      <Carousel
        cost={productDetails.category}
        title={productDetails.title}
        images={productDetails.images}
      />
      <View style={styles.titleAndPriceView}>
        <HeadingSmall autoCalcWidth size={RF(20)} bold text={'Product Price'} />
        <Text style={styles.priceText}>
          {`${getPriceStatus(productDetails.price)}`}
        </Text>
      </View>
      <View style={styles.mainView}>
        <HeadingSmall topSpacing={HDP(25)} size={RF(18)} text="Reviews" />
        <View style={styles.ratingsView}>
          <View style={styles.nestedRatingView}>
            <SvgIcon name="StarFilled" size={20} />
            <Text style={styles.ratingLabel}>
              {productDetails.rating} {getRatingResult(productDetails.rating)}
            </Text>
            <Text style={[styles.priceLabel]}> ({productDetails.stock})</Text>
          </View>
        </View>
        <HeadingSmall topSpacing={HDP(25)} size={RF(18)} text="Brand" />
        <Text style={[styles.priceLabel, {marginTop: 5}]}>
          {productDetails.brand}
        </Text>
        <HeadingSmall topSpacing={HDP(25)} size={RF(18)} text="Description" />
        <DescriptionText text={productDetails?.description} />
      </View>
      <View style={styles.checkoutView}>
        <Button
          onPress={onAddToCart}
          label={!isAddedToCart ? 'Add to Cart' : 'Remove from Cart'}
          style={[styles.buttonView]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleAndPriceView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '92%',
    alignSelf: 'center',
    marginTop: 20,
  },
  priceText: {
    fontFamily: family.PoppinsSemiBold,
    fontSize: RF(20),
    color: palette.primary,
    marginTop: 2,
  },
  mainView: {
    width: '92%',
    alignSelf: 'center',
    flex: 1,
  },
  ratingsView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: HDP(7),
    justifyContent: 'space-between',
  },
  nestedRatingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distanceView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: HDP(1),
  },
  ratingLabel: {
    fontFamily: family.PoppinsMedium,
    fontSize: RF(17),
    marginLeft: 4,
    color: palette.lightPrimary,
  },
  priceLabel: {
    fontFamily: family.PoppinsRegular,
    fontSize: RF(17),
    color: palette.greyText,
  },
  checkoutView: {
    width: WiP(100),
    height: 90,
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    backgroundColor: palette.white,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  buttonView: {
    alignSelf: 'flex-end',
    backgroundColor: palette.primary,
    borderColor: palette.primary,
    borderWidth: 1,
    height: 45,
  },
});
