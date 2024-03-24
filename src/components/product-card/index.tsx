import {ManageItemQuantity, SkeletonLoader, SvgIcon} from 'components';
import {HDP, RF, WiP, getPriceStatus, getRatingResult} from 'helpers';
import {useAppSelector} from 'hooks';
import React, {FC} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-animatable';
import {useDispatch} from 'react-redux';
import {addCartItem, removeCartItem} from 'slices/productsSlice';
import {family, palette} from 'theme';

interface Props extends Products.Product {
  isLoadingComplete: boolean;
}
export const ProductCard: FC<Props> = ({isLoadingComplete, ...item}) => {
  const dispatch = useDispatch();
  const {title, rating, price, images, brand, stock, id} = item;
  const {cartItems} = useAppSelector(state => state.productsSlice);
  return (
    <SkeletonLoader style={styles.container} isVisible={!isLoadingComplete}>
      <View style={styles.container}>
        <ImageBackground
          source={{uri: images?.[0]}}
          style={styles.productImageView}
          imageStyle={styles.productImage}>
          <View style={styles.timeView}>
            <Text style={styles.timeLabel}>{brand}</Text>
            {/* <Text style={styles.timeLabelMinute}> min</Text> */}
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
      </View>
    </SkeletonLoader>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WiP(93),
    height: HDP(265),
    borderRadius: 3,
    backgroundColor: palette.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
    alignSelf: 'center',
    marginVertical: HDP(7.5),
  },
  productImageView: {
    width: '100%',
    height: HDP(180),
    justifyContent: 'flex-end',
  },
  productImage: {
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
  },
  labelHeading: {
    fontFamily: family.PoppinsSemiBold,
    fontSize: RF(18),
    marginBottom: 2,
    textTransform: 'capitalize',
  },
  detailsContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    flex: 1,
  },
  ratingsView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: HDP(1),
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
    fontSize: RF(14),
    marginLeft: 4,
    color: palette.lightPrimary,
  },
  distanceLabel: {
    fontFamily: family.PoppinsMedium,
    fontSize: RF(17),
    color: palette.black,
  },
  priceLabel: {
    fontFamily: family.PoppinsRegular,
    fontSize: RF(14),
    marginLeft: 4,
    color: palette.greyText,
  },
  timeView: {
    maxWidth: WiP(40),
    height: 28,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: palette.white,
    alignSelf: 'flex-end',
    marginBottom: -10,
    marginRight: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  timeLabel: {
    fontFamily: family.PoppinsRegular,
    fontSize: RF(14),
    color: palette.primary,
  },
  timeLabelMinute: {
    fontFamily: family.PoppinsRegular,
    fontSize: RF(15),
    color: palette.black,
  },
  quantityView: {
    bottom: 2,
  },
});
