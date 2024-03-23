import React, {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import styles from './styles';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
type Props = {
  style?: StyleProp<ViewStyle>;
  isVisible: boolean;
  children?: React.ReactElement | React.ReactElement[] | false;
};
export const SkeletonLoader: FC<Props> = ({style, isVisible, children}) => {
  return (
    <ShimmerPlaceholder
      shimmerColors={['#f0f5f1', '#d2d5d9']}
      duration={1500}
      style={[!isVisible && style]}
      location={[0.5, 1]}
      visible={isVisible}>
      {children}
    </ShimmerPlaceholder>
  );
};

export const OverlaySkeletonLoader: FC<
  Pick<Props, 'isVisible'> & Pick<Partial<Props>, 'style'>
> = ({isVisible, style}) => {
  return (
    <SkeletonLoader isVisible={isVisible} style={[styles.loader, style]} />
  );
};
