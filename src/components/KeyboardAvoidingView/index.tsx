import {IS_ANDROID} from 'helpers';
import React, {FC} from 'react';
import {ViewStyle} from 'react-native';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';

interface Props extends KeyboardAwareScrollViewProps {
  children: React.ReactNode | React.ReactNode[];
  contentContainerStyle?: ViewStyle;
}
export const KeyboardAvoidingView: FC<Props> = ({
  children,
  contentContainerStyle,
  ...props
}) => {
  return (
    <KeyboardAwareScrollView
      // enableOnAndroid
      {...props}
      showsVerticalScrollIndicator={false}
      style={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled"
      extraScrollHeight={IS_ANDROID ? 50 : 0}
      contentContainerStyle={contentContainerStyle}>
      {children}
    </KeyboardAwareScrollView>
  );
};
