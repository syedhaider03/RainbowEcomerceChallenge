// Importing helper functions and modules
import {heightPercentageToDP, widthPercentageToDP} from './dimensionHelper';
import {RFValue} from 'react-native-responsive-fontsize';
import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';

// Constants for header height and screen dimensions
export const headerHeight = Platform.OS === 'ios' ? 40 : 60;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';
export const STATUSBAR_HEIGHT = StatusBar.currentHeight;

// Responsive Font Size function
export function RF(size: number, scale: number = 0, height?: number) {
  // Checking if device is iPhone X
  const isIpX = isIphoneX();
  // Adjusting font size based on device and platform
  return RFValue(
    !isIpX && IS_IOS ? size - 2 : size - 1.3,
    height ?? isIpX ? SCREEN_HEIGHT - 40 : SCREEN_HEIGHT,
  );
}

// Width in Percentage function
export function WiP(size: number, width?: number) {
  return widthPercentageToDP(size, width);
}

// Height in Percentage function
export function HiP(size: number, height?: number) {
  return heightPercentageToDP(size, height);
}

// Pixel Ratio function
export function HDP(size: number) {
  return PixelRatio.roundToNearestPixel(size);
}

// Capitalize First Letter function
export function CFL(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getCircleRadiusStyle = (radius: number) => {
  return {
    height: radius,
    width: radius,
    borderRadius: radius / 2,
  };
};

export const wrapForLoader = <T>(list: T[], length?: number): T[] => {
  if (list?.length) return list;
  else return new Array(length ?? 5).fill({} as T);
};

export const getRatingResult = (rating: number): string => {
  if (rating >= 4.5) {
    return 'Excellent';
  } else if (rating >= 3.5) {
    return 'Good';
  } else if (rating >= 2.5) {
    return 'Average';
  } else if (rating >= 1.5) {
    return 'Poor';
  } else if (rating >= 0.5) {
    return 'Very Poor';
  } else {
    return 'Invalid Rating';
  }
};

export const getPriceStatus = (price: string | number) => {
  if (price == 0 || price == '0' || price == '0.00') {
    return 'Free';
  } else if (price) {
    return '£' + floatPad(price);
  } else return 'FREE';
};

export function floatPad(num: number | string) {
  if (typeof num == 'string') num = parseFloat(num);
  return (Math.round(num * 100) / 100).toFixed(2);
}
