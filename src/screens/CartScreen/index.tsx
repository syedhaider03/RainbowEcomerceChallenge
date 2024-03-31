import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, CartItem} from 'components';
import {HDP, RF, WiP} from 'helpers';
import {useAppDispatch, useAppSelector} from 'hooks';
import React, {FC, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {doPostAOrder} from 'slices/productsSlice';
import styles from './styles';
import {Checkout} from 'screens';

export const CartScreen: FC<NativeStackScreenProps<ParamList, 'Cart'>> = ({
  navigation,
}) => {
  const [isCheckoutVisible, setCheckoutVisible] = useState(false);
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
    dispatch(doPostAOrder(cartItems))
      .unwrap()
      .then(() => {
        setCheckoutVisible(false);
      });
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
            onPress={() => setCheckoutVisible(true)}
            label={'Checkout'}
            loadingText={'Submitting...'}
            disabled={cartItems.length < 1}
            isLoading={orderLoading}
          />
        </View>
      </View>
      <Checkout
        isVisible={isCheckoutVisible}
        onClose={() => setCheckoutVisible(false)}
        onSubmit={onSubmit}
        total={total}
      />
    </View>
  );
};
