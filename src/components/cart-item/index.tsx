import {ManageItemQuantity, SvgIcon} from 'components';
import {HDP, RF, WiP} from 'helpers';
import React, {FC} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {family, palette} from 'theme';

export const CartItem: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-GGuUBa9frqFf_fN74hERS96U60Kc3tRmCSJevvFQg&s',
            }}
          />
        </View>
        <View style={styles.detailsView}>
          <Text numberOfLines={2} style={styles.title}>
            MacBook Pro 14" M3
          </Text>
          <View>
            <View style={styles.specsView}>
              <Text numberOfLines={1} style={styles.specNameLabel}>
                Color:{' '}
              </Text>
              <Text numberOfLines={1} style={styles.specNameValue}>
                Space Grey
              </Text>
            </View>
            <View style={styles.specsView}>
              <Text numberOfLines={1} style={styles.specNameLabel}>
                Memory:{' '}
              </Text>
              <Text numberOfLines={1} style={styles.specNameValue}>
                8GB unified memory
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.priceView}>
          <Text style={styles.priceText}>£1599</Text>
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.deleteView}>
          <SvgIcon size={20} name="Delete" />
          <Text style={styles.removeLabel}>Remove</Text>
        </View>
        <ManageItemQuantity />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WiP(93),
    height: HDP(150),
    alignSelf: 'center',
    marginTop: 20,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
    // backgroundColor: palette.white,
    // paddingHorizontal:WiP(3),
    // paddingVertical:HDP(10)
  },
  topView: {
    flexDirection: 'row',
    flex: 1,
  },
  imageView: {
    width: WiP(20),
    height: HDP(70),
    borderWidth: 1,
    borderColor: palette.darkgrey,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: WiP(15),
    height: HDP(50),
  },
  detailsView: {
    paddingLeft: 10,
    justifyContent: 'space-between',
    height: HDP(70),
  },
  title: {
    fontFamily: family.PoppinsMedium,
    fontSize: RF(18),
    color: palette.black,
    width: WiP(52),
  },
  specsView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  specNameLabel: {
    fontFamily: family.PoppinsRegular,
    fontSize: RF(14),
    color: palette.greyText,
  },
  specNameValue: {
    fontFamily: family.PoppinsMedium,
    fontSize: RF(14),
    color: palette.black,
  },
  priceView: {
    alignItems: 'flex-end',
    flex: 1,
  },
  priceText: {
    fontFamily: family.PoppinsSemiBold,
    fontSize: RF(18),
    color: palette.primary,
  },
  bottomView: {
    flex: 0.6,
    justifyContent: 'space-between',
    marginLeft: WiP(22),
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  removeLabel: {
    fontFamily: family.PoppinsRegular,
    fontSize: RF(15),
    color: palette.beetrootRed,
  },
});
