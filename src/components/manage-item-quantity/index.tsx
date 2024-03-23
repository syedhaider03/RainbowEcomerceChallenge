import {SvgIcon} from 'components';
import {HDP, RF, WiP} from 'helpers';
import React, {FC, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import {family, palette} from 'theme';

export const ManageItemQuantity: FC = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleRemove = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.removeButton} onPress={handleRemove}>
        <SvgIcon name="Minus" size={15} />
      </TouchableOpacity>
      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <SvgIcon name="Add" size={15} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: WiP(28),
    height: HDP(27),
    borderRadius: 15,
    borderWidth: 1,
    borderColor: palette.primary,
    position: 'absolute',
    right: 1,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  plusIcon: {
    backgroundColor: 'blue',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  iconText: {
    color: 'white',
    fontSize: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  removeButton: {
    backgroundColor: palette.primary,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    padding: 10,
  },
  addButton: {
    backgroundColor: palette.primary,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  quantityText: {
    fontSize: RF(18),
    marginHorizontal: 10,
    flex:1,
    fontFamily:family.PoppinsMedium,
    textAlign:'center',
    
  },
});
