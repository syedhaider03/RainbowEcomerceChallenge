import * as config from 'assets/svgs';
import React, {FC} from 'react';
import {camelCase, upperFirst} from 'lodash';
import {TouchableOpacity, View, ViewStyle} from 'react-native';
import styles from './style';

type Props = {
  onPress?: () => void;
  name: keyof typeof config;
  size?: number;
  height?: number;
  width?: number;
  containerStyle?: ViewStyle | ViewStyle[];
  [x: string]: any;
  children?: React.ReactNode;
};
export const SvgIcon: FC<Props> = ({
  onPress,
  name,
  size,
  containerStyle,
  height,
  width,
  children,
  ...otherProps
}) => {
  const pascalCaseName = name?.length ? upperFirst(camelCase(name)) : 'Warning';
  // @ts-ignore
  const iconClass = config[pascalCaseName] || config.Warning;
  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, containerStyle]}>
        {React.createElement(iconClass, {
          backgroundColor: 'transparent',
          height: height || size,
          width: width || size,
          children,
          ...otherProps,
        })}
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={[styles.container, containerStyle]}>
        {React.createElement(iconClass, {
          backgroundColor: 'transparent',
          height: height || size,
          width: width || size,
          ...otherProps,
        })}
        {children}
      </View>
    );
  }
};
