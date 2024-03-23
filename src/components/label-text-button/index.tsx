import React, {FC} from 'react';
import screenStyles from './style';
import {
  Text,
  TextStyle,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {TouchableCustomFeedback} from 'components';
import {palette} from 'theme';
import styles from './style';

type Props = {
  label: string;
  onPress: () => void;
  description?: string;
  labelStyle?: TextStyle;
  anchorStyle?: TextStyle | TextStyle[];
  style?: ViewStyle;
  disabled?: boolean;
  isActive?: boolean;
};
export const LabelTextButton: FC<Props> = ({
  label,
  description,
  onPress,
  style,
  anchorStyle,
  labelStyle,
  disabled,
}) => {
  return (
    <View style={[styles.container, style]}>
      {description && (
        <Text style={[styles.descText, labelStyle]}>{description}</Text>
      )}
      <TouchableCustomFeedback
        disabled={disabled}
        style={styles.buttonContainer}
        background={TouchableNativeFeedback.Ripple(
          palette.rippleAndroid,
          true,
          40,
        )}
        onPress={onPress}>
        <Text
          style={[styles.label, disabled && styles.disabledText, anchorStyle]}>
          {label}
        </Text>
        <View style={styles.filler} />
      </TouchableCustomFeedback>
    </View>
  );
};

export const DescTextButton: FC<Props> = ({
  label,
  description,
  onPress,
  style,
  anchorStyle,
  labelStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.descText2, labelStyle]}>{description}</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={[styles.label2, anchorStyle]}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const TwoLetterButton: FC<Props> = ({
  label,
  onPress,
  style,
  labelStyle,
  isActive,
}) => {
  return (
    <TouchableCustomFeedback
      onPress={onPress}
      style={[styles.highlightBtn, style, isActive && styles.activeBtnStyle]}>
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[
          styles.twoLetterLabel,
          labelStyle,
          isActive && styles.activeBtnLabelStyle,
        ]}>
        {label}
      </Text>
    </TouchableCustomFeedback>
  );
};
