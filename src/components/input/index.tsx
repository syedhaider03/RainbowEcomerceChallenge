import * as config from 'assets/svgs';
import React, {FC, useEffect, useState} from 'react';
import screenStyles from './style';
import {HDP, RF} from 'helpers';
import {
  StyleProp,
  Text,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  TextInput
} from 'react-native';
import {family, palette} from 'theme';
import {SvgIcon, TouchableCustomFeedback} from 'components';


interface Props extends TextInputProps {
  icon?: keyof typeof config;
  name: string;
  onPress?: () => void;
  disabled?: boolean;
  isRequired?: boolean;
  isDownArrow?: boolean;
  style?: StyleProp<TextStyle>;
  placeholder?: string;
  labelLight?: boolean;
  containerStyle?: StyleProp<TextStyle>;
  marginTop?: number;
  boldLabel?: boolean;
}

export const Input: FC<Props> = ({
  icon,
  name,
  disabled,
  isDownArrow,
  isRequired,
  style,
  containerStyle,
  marginTop,
  boldLabel,
  ...props
}) => {
  const styles = screenStyles();
  const [isPasswordOpen, setPasswordOpen] = useState(props.secureTextEntry);
  const [isFocused, setFocused] = useState(false);
  return (
    <View
      style={[styles.container, containerStyle, !!marginTop && {marginTop}]}>
      <View style={styles.labelDescView}>
        {!!name && (
          <Text
            style={[
              styles.label,
              !icon && !boldLabel && {fontFamily: family.PoppinsRegular},
            ]}>
            {name} {isRequired && <Text style={styles.required}>*</Text>}
          </Text>
        )}
        {(props.multiline || !!props.maxLength) && (
          <Text style={styles.countText}>
            {props.value?.length}/{props.maxLength}
          </Text>
        )}
      </View>
      <View
        style={[
          styles.textInputView,
          containerStyle,
          !disabled && isFocused && {borderColor: palette.primary},
          disabled && {backgroundColor: palette.greyCultured},
        ]}>
        {!!icon && (
          <View style={styles.iconView}>
            <SvgIcon name={icon} size={HDP(15)} />
          </View>
        )}
        <TextInput
          {...props}
          placeholderTextColor={palette.placeholderColor}
          style={[
            styles.textInput,
            props.multiline && styles.textField,
            !icon && !props.multiline && {marginLeft: 12},
            style,
          ]}
          secureTextEntry={isPasswordOpen}
          autoCapitalize={'none'}
          spellCheck={false}
          editable={!disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {props.secureTextEntry && (
          <TouchableCustomFeedback
            onPress={() => setPasswordOpen(prev => !prev)}
            style={styles.iconView}>
            <SvgIcon  name={isPasswordOpen ? 'Eyeoff' : 'Eye'} size={HDP(18)} />
          </TouchableCustomFeedback>
        )}
        {isDownArrow && (
          <View style={styles.iconView}>
            <SvgIcon name="DownwardArray" size={HDP(15)} />
          </View>
        )}
      </View>
    </View>
  );
};