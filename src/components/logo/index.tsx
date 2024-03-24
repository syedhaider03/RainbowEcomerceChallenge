import React, {FC} from 'react';
import {SvgIcon} from 'components';
import * as Animatable from 'react-native-animatable';
import {Image, View, ViewStyle} from 'react-native';

interface CustomLogoProps {
  size?: number;
}

export const AppLogo: FC<CustomLogoProps> = ({size}) => {
  return (
    <View
      style={{
        transform: [
          {
            scale: 1.5,
          },
        ],
      }}>
      <SvgIcon size={size} name="Logo" />
    </View>
  );
};

interface Props extends Partial<Animatable.AnimatableProps<any>> {
  size?: number;
  animation?: Animatable.Animation;
  style?: ViewStyle;
  isWhite?: boolean;
  source?: any;
}
export const Logo: FC<Props> = ({
  size = 18,
  isWhite,
  animation,
  style,
  ...otherProps
}) => {
  return (
    //@ts-ignore
    <Animatable.View
      {...otherProps}
      animation={animation || undefined}
      useNativeDriver
      style={[
        style,
        {
          transform: [
            {
              scale: 1.8,
            },
          ],
        },
      ]}
      duration={1000}>
      <SvgIcon size={size} name="Logo" />
    </Animatable.View>
  );
};
