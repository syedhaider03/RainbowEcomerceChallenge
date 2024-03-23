import { Platform } from 'react-native';

/*
Available font weights

300 Light
400 Regular
500 Medium
600 SemiBold
700 Bold
*/

export const family = {
  PoppinsBold: Platform.select({
    ios: 'Poppins-Bold', // The font family name
    android: 'Poppins-Bold', // The file name
  }),
  PoppinsMedium: Platform.select({
    ios: 'Poppins-Medium', // The font family name
    android: 'Poppins-Medium', // The file name
  }),
  PoppinsRegular: Platform.select({
    ios: 'Poppins-Regular', // The font family name
    android: 'Poppins-Regular', // The file name
  }),
  PoppinsSemiBold: Platform.select({
    ios: 'Poppins-SemiBold', // The font family name
    android: 'Poppins-SemiBold', // The file name
  }),
  PoppinsLight: Platform.select({
    ios: 'Poppins-Light', // The font family name
    android: 'Poppins-Light', // The file name
  }),
  PoppinsExtraBold: Platform.select({
    ios: 'Poppins ExtraBold', // The font family name
    android: 'Poppins ExtraBold', // The file name
  }),
  ZendotsRegular: Platform.select({
    ios: 'ZenDots-Regular', // The font family name
    android: 'ZenDots-Regular', // The file name
  }),
};
