import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, CartItem} from 'components';
import {HDP, RF, WiP} from 'helpers';
import {useAppDispatch, useAppSelector} from 'hooks';
import React, {FC} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {doPostAOrder} from 'slices/productsSlice';
import {family, palette} from 'theme';
// import styles from './styles';

export const CartScreen: FC<NativeStackScreenProps<ParamList, 'Products'>> = ({
  navigation,
}) => {
  const {cartItems, orderLoading} = useAppSelector(
    state => state.productsSlice,
  );
  const dispatch = useAppDispatch();
  const renderItem = ({item}: {item: Products.CartItem}) => (
    <CartItem {...item} />
  );
  const total = cartItems?.reduce((prev, current) => {
    return (prev += current.price * current.quantity);
  }, 0);

  const onSubmit = () => {
    dispatch(doPostAOrder(cartItems));
  };

  return (
    <View style={styles.container}>
      <View style={styles.listView}>
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={item => item.id + item.title}
          ItemSeparatorComponent={() => <View style={styles.separatorLg} />}
        />
      </View>
      <View style={styles.checkoutView}>
        <View style={styles.subtotalView}>
          <Text style={styles.subtotalLabel}>Subtotal:</Text>
          <Text style={styles.priceText}>£ {total}</Text>
        </View>
        <Text style={styles.shortdescLabel}>
          Inclusive of Shipping, taxes, and discounts.
        </Text>
        <View style={styles.buttonWrapper}>
          <Button
            style={styles.cancelButton}
            onPress={() => navigation.goBack()}
            label={'Cancel'}
            labelStyle={styles.btnLabelStyle}
          />
          <Button
            style={styles.mainButton}
            onPress={onSubmit}
            label={'Checkout'}
            loadingText={'Updating...'}
            disabled={cartItems.length < 1}
            isLoading={orderLoading}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    flex: 1,
  },
  checkoutView: {
    height: HDP(150),
    borderTopWidth: 1,
    borderTopColor: palette.darkgrey,
    paddingTop: HDP(15),
    paddingHorizontal: WiP(4),
  },
  subtotalView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subtotalLabel: {
    fontFamily: family.PoppinsRegular,
    fontSize: RF(18),
    color: palette.black,
  },
  shortdescLabel: {
    fontFamily: family.PoppinsRegular,
    fontSize: RF(15),
    color: palette.greyText,
    marginTop: HDP(10),
  },
  priceText: {
    fontFamily: family.PoppinsSemiBold,
    fontSize: RF(18),
    color: palette.black,
  },
  buttonWrapper: {
    height: HDP(70),
    // marginTop: HDP(20),
    flexDirection: 'row',
    backgroundColor: palette.white,
    width: WiP(100),
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: HDP(10),
  },
  mainButton: {
    width: WiP(44),
    height: HDP(44),
    borderRadius: 0,
    elevation: 0,
  },
  cancelButton: {
    width: WiP(44),
    height: HDP(44),
    borderRadius: 3,
    backgroundColor: palette.white,
    marginRight: HDP(10),
    borderWidth: 2,
    borderColor: palette.darkgrey,
    shadowOpacity: 0,
    elevation: 0,
  },
  btnLabelStyle: {
    color: palette.black,
    fontFamily: family.PoppinsRegular,
    fontSize: RF(16),
  },
  separatorLg: {
    height: 10,
    borderBottomWidth: 1,
    borderColor: palette.darkgrey,
  },
});
