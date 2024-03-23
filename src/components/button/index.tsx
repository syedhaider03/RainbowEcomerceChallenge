import React, {FC} from 'react';
import styles from './style';
import {
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  ViewStyle,
  TextStyle,
  Pressable,
  StyleProp,
} from 'react-native';
import {family, palette} from 'theme';
import {SvgIcon, TouchableCustomFeedback} from 'components';
import {HDP} from 'helpers';
import * as config from 'assets/svgs';

type Props = {
  onPress: () => void;
  label?: string;
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  icon?: keyof typeof config;
  size?: number;
  isActive?: boolean;
  color?: string;
  slimButton?: boolean;
  isRelativePosition?: boolean;
  disabledButtonOnly?: boolean;
  hideCompletely?: boolean;
  noMargin?: boolean;
  noBorderRadius?: boolean;
  borderedButton?: boolean;
};

export const Button: FC<Props> = ({
  onPress,
  label,
  isLoading,
  loadingText,
  disabled,
  style,
  labelStyle,
  slimButton,
  hideCompletely,
  borderedButton,
}) => {
  return (
    <TouchableCustomFeedback
      onPress={onPress}
      disabled={disabled || isLoading}
      style={[
        styles.container,
        styles.buttonContainer,
        {backgroundColor: palette.primary},
        slimButton && styles.slimButton,
        disabled && {opacity: 0.5},
        hideCompletely && {opacity: 0},
        borderedButton && styles.borderedButton,
        style,
      ]}>
      <Text
        style={[
          styles.buttonText,
          borderedButton && {color: palette.primary},
          labelStyle,
        ]}>
        {isLoading ? loadingText : label}
      </Text>
      {isLoading && (
        <ActivityIndicator style={{marginLeft: 10}} color={palette.white} />
      )}
    </TouchableCustomFeedback>
  );
};

export const BorderlessButton: FC<Props> = ({onPress, label, disabled}) => {
  return (
    <TouchableCustomFeedback
      background={TouchableNativeFeedback.Ripple(
        palette.rippleAndroid,
        true,
        40,
      )}
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, disabled && {opacity: 0.5}]}>
      <Text style={styles.buttonTextLight}>{label}</Text>
    </TouchableCustomFeedback>
  );
};

export const SquareIconButton: FC<Omit<Props, 'label'>> = ({
  onPress,
  disabled,
  icon,
  size,
  isActive,
  isRelativePosition,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.iconButton,
        disabled && {opacity: 0.5},
        isActive && {zIndex: 999},
        isRelativePosition && {position: 'relative'},
      ]}>
      <SvgIcon name={icon ?? 'Lock'} size={size ?? HDP(22)} />
    </TouchableOpacity>
  );
};
