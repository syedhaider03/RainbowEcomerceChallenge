import Modal from 'react-native-modal';
import React, {FC} from 'react';
import screenStyle from './style';
import {Text, TextInput, TouchableNativeFeedback, View} from 'react-native';
import {palette} from 'theme';
import {useAppDispatch, useAppSelector} from 'hooks';
import {Button, SvgIcon, TouchableCustomFeedback} from 'components';
import {HDP, IS_IOS} from 'helpers';
import {NavigationProp, useNavigation} from '@react-navigation/native';

type Props = {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  type?: string;
  onSubmit: () => void;
  total:number
};
export const Checkout: FC<Props> = ({
  isVisible,
  onClose,
  title,
  type,
  onSubmit,
  total
}) => {
  const styles = screenStyle();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<ParamList>>();
  const {orderLoading} = useAppSelector(state => state.productsSlice);
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn={'fadeInUpBig'}
      animationOut={'fadeOutDownBig'}
      useNativeDriver
      backdropColor={palette.placeholderColor}
      useNativeDriverForBackdrop
      swipeDirection={'down'}
      backdropOpacity={0.3}
      hideModalContentWhileAnimating>
      <View style={[styles.CPcontainer, IS_IOS && {marginBottom: HDP(20)}]}>
        <View style={styles.handleBar} />
        <View style={styles.joinedListWrapper}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Checkout</Text>
            <TouchableCustomFeedback
              background={TouchableNativeFeedback.Ripple(
                palette.rippleAndroid,
                true,
                20,
              )}
              onPress={onClose}
              style={styles.closeButton}>
              <SvgIcon name="Close" size={HDP(15)} />
            </TouchableCustomFeedback>
          </View>
          <View style={styles.cardDetails}>
            <View style={styles.itemTotal}>
              <Text style={styles.itemTotalLabel}>Total:</Text>
              <Text style={styles.itemTotalValue}>£{total}</Text>
            </View>
            <View style={styles.cardInputHeader}>
              <SvgIcon name="Card" size={HDP(25)} />
              <Text style={styles.headerLabel}>Card Details:</Text>
            </View>
            <TextInput value='424242424242' placeholder="Card Number" style={styles.input} />
            <View style={styles.cardInput}>
              <TextInput
                placeholder="Expiry Date"
                value='02/29'
                style={[styles.input, styles.marginRight]}
              />
              <TextInput value='123' placeholder="CVV" style={styles.input} />
            </View>
          </View>
          <View style={styles.addressSection}>
            <Text style={styles.addressLabel}>Address</Text>
            <View style={styles.addressField}>
              <SvgIcon name="EditIcon" size={HDP(15)} />
              <Text style={styles.addressInput}>
                221B Baker Street, Marylebone, London, England, NW1 6XE
              </Text>
              {/* Edit SVG image */}
            </View>
          </View>
          <Button
            style={styles.bgMainButton}
            onPress={onSubmit}
            label={'Pay Now'}
            loadingText={'Placing Order...'}
            isLoading={orderLoading}
          />
        </View>
      </View>
    </Modal>
  );
};
