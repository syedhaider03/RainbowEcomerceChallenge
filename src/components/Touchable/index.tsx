import _ from 'lodash';
import React, {FC} from 'react';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
} from 'react-native';

type Props = {
  useForeground?: boolean;
};
const TouchableOpacityIOS: FC<TouchableOpacityProps & Props> = props => {
  return <TouchableOpacity {...props}>{props.children}</TouchableOpacity>;
};
const TouchableNativeFeedbackAndroid: FC<
  TouchableNativeFeedbackProps & Props
> = props => {
  return (
    <TouchableNativeFeedback
      useForeground={props.useForeground}
      {..._.omit(props, ['style'])}>
      <View style={props.style}>{props.children}</View>
    </TouchableNativeFeedback>
  );
};

export const TouchableNativeInnerFeedbackAndroid: FC<
  TouchableNativeFeedbackProps & Props
> = props => {
  return (
    <View style={[{overflow: 'hidden'}, props.style]}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackgroundBorderless(20)}
        useForeground={props.useForeground}
        {..._.omit(props, ['style'])}>
        {props.children}
      </TouchableNativeFeedback>
    </View>
  );
};
export const TouchableCustomFeedback =
  Platform.OS === 'ios' ? TouchableOpacityIOS : TouchableNativeFeedbackAndroid;
