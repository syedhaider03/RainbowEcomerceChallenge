import {SvgIcon} from 'components';
import {HDP, RF, WiP} from 'helpers';
import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  ViewStyle,
} from 'react-native';
import {family, palette} from 'theme';

interface Props {
  style?: any;
  maxQuantity: number; // New prop for maximum quantity,
  restrictRemove?: boolean;
  onPressAdd: (quantity: number) => void;
  onPressRemove: (quantity: number) => void;
  currentQuantity?: number;
}

export const ManageItemQuantity: FC<Props> = ({
  style,
  maxQuantity,
  restrictRemove,
  onPressAdd,
  onPressRemove,
  currentQuantity = 0,
}) => {
  const [quantity, setQuantity] = useState(currentQuantity);
  const [expanded, setExpanded] = useState(false);
  const animationValue = useState(new Animated.Value(0))[0];

  const handleAdd = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
      onPressAdd(quantity + 1);
    }
  };

  useEffect(() => {
    if (currentQuantity > 0) {
      setQuantity(currentQuantity);
      onPressAdd(currentQuantity);
      if (!expanded) toggleExpand();
    } else if (currentQuantity != undefined && expanded) {
      toggleExpand();
    }
  }, [currentQuantity]);

  const handleRemove = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onPressAdd(quantity - 1);
    } else if (quantity == 1) {
      onPressRemove(0);
    }
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
    Animated.timing(animationValue, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const containerWidth = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [27, 110], // Adjust the width values according to your requirement
  });

  const onFirstClick = () => {
    setQuantity(1);
    onPressAdd(1);
    toggleExpand();
  };

  return (
    <Animated.View
      style={[
        styles.container,
        style,
        {
          width: containerWidth,
          backgroundColor: expanded ? palette.white : palette.primary,
          alignItems: expanded ? 'center' : undefined,
        },
      ]}>
      {expanded ? (
        <>
          <TouchableOpacity style={styles.removeButton} onPress={handleRemove}>
            <SvgIcon name="Minus" size={15} />
          </TouchableOpacity>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={styles.quantityText}>
            {quantity}
          </Text>
          <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
            <SvgIcon name="Add" size={15} />
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity style={styles.mainButton} onPress={onFirstClick}>
          <SvgIcon name="Add" size={15} />
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: HDP(27),
    height: HDP(27),
    backgroundColor: palette.primary,
    justifyContent: 'center',
    borderRadius: 14.7,
    borderWidth: 1,
    borderColor: palette.primary,
    position: 'absolute',
    right: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  mainButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    flex: 1,
    fontFamily: family.PoppinsMedium,
    textAlign: 'center',
  },
});
