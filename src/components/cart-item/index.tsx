import {ManageItemQuantity, SvgIcon} from 'components';
import {useAppDispatch} from 'hooks';
import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {addCartItem, removeCartItem} from 'slices/productsSlice';
import styles from './styles';

interface Props extends Products.CartItem {}
export const CartItem: FC<Props> = item => {
  const {images, title, price, stock, brand, category, quantity} = item;
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{
              uri: images[0],
            }}
          />
        </View>
        <View style={styles.detailsView}>
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
          <View>
            <View style={styles.specsView}>
              <Text numberOfLines={1} style={styles.specNameLabel}>
                Brand:{' '}
              </Text>
              <Text numberOfLines={1} style={styles.specNameValue}>
                {brand}
              </Text>
            </View>
            <View style={styles.specsView}>
              <Text numberOfLines={1} style={styles.specNameLabel}>
                Category:{' '}
              </Text>
              <Text numberOfLines={1} style={styles.specNameValue}>
                {category}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.priceView}>
          <Text style={styles.priceText}>£1599</Text>
        </View>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity
          onPress={() => dispatch(removeCartItem(item.id))}
          style={styles.deleteView}>
          <SvgIcon size={20} name="Delete" />
          <Text style={styles.removeLabel}>Remove</Text>
        </TouchableOpacity>
        <ManageItemQuantity
          onPressAdd={quantity => dispatch(addCartItem({...item, quantity}))}
          onPressRemove={() => dispatch(removeCartItem(item.id))}
          maxQuantity={stock}
          currentQuantity={quantity}
          // restrictRemove
        />
      </View>
    </View>
  );
};
