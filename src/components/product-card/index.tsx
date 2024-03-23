import {ManageItemQuantity, SvgIcon} from 'components';
import {HDP, RF, WiP} from 'helpers';
import React, {FC} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-animatable';
import {family, palette} from 'theme';

type Props = {};
export const ProductCard: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('assets/mock/food.jpg')}
        style={styles.productImageView}
        imageStyle={styles.productImage}>
        <View style={styles.timeView}>
          <Text style={styles.timeLabel}>10 - 20</Text>
          <Text style={styles.timeLabelMinute}> min</Text>
        </View>
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <Text numberOfLines={1} style={styles.labelHeading}>
          Pure
        </Text>
        <View style={styles.ratingsView}>
          <View style={styles.nestedRatingView}>
            <SvgIcon name="StarFilled" size={14} />
            <Text style={styles.ratingLabel}>4.9 Excellent</Text>
          </View>
          <ManageItemQuantity />
        </View>
        <View style={styles.distanceView}>
          <Text style={styles.distanceLabel}>0.3 miles</Text>
          <Text>·</Text>
          <Text style={styles.priceLabel}>£0.49 delivery</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WiP(93),
    height: HDP(260),
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
    marginTop: HDP(15),
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
    fontSize: RF(19),
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
    justifyContent:"space-between"
  },
  nestedRatingView:{
    flexDirection:"row",
    alignItems:'center'
  },
  distanceView:{
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
    fontSize: RF(15),
    color: palette.greyText,
  },
  priceLabel: {
    fontFamily: family.PoppinsRegular,
    fontSize: RF(15),
    marginLeft: 4,
    color: palette.beetrootRed,
  },
  timeView: {
    width: WiP(27),
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
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeLabel: {
    fontFamily: family.PoppinsSemiBold,
    fontSize: RF(17),
    color: palette.black,
  },
  timeLabelMinute: {
    fontFamily: family.PoppinsRegular,
    fontSize: RF(15),
    color: palette.black,
  },
});
