import {family, palette} from 'theme';
import {HDP, RF, WiP} from 'helpers';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const styles = () => {
  const {top} = useSafeAreaInsets();
  return StyleSheet.create({
    container: {
      width: WiP(100),
      height: HDP(240),
      // marginTop: 20,
      backgroundColor: palette.white,
      shadowColor: palette.lightPrimary,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.23,
      shadowRadius: 9.51,
      elevation: 15,
      // paddingTop: 10,
    },
    carouselImage: {
      width: WiP(100),
      height: HDP(220),
      resizeMode: 'contain',
      marginTop:10
    },
    flatlist: {
      height: HDP(240),
      flexDirection: 'row',
    },
    backBtn: {
      maxWidth: HDP(200),
      paddingHorizontal:10,
      alignItems: 'center',
      height: HDP(30),
      borderRadius: HDP(20),
      backgroundColor: palette.white,
      justifyContent: 'center',
      alignSelf: 'center',
      marginHorizontal: HDP(5),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      position: 'absolute',
      right: 5,
      top: 1,
    },
    pagingContainer: {
      paddingVertical: 0,
      zIndex: 1,
      top: -25,
    },
    pagingDotActive: {
      width: 24,
      height: 8,
      borderRadius: 12,
      marginHorizontal: 8,
      backgroundColor: palette.primary,
    },
    pagingDotInactive: {
      width: 12,
      height: 12,
      borderRadius: 6,
      marginHorizontal: 8,
      backgroundColor: palette.white,
    },
    pagingDotContainer: {
      width: 10,
    },
    headerCustom: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      zIndex: 1,
      marginTop: HDP(20),
      justifyContent: 'space-between',
      width: WiP(98),
    },
    subView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerTitle: {
      fontFamily: family.PoppinsMedium,
      fontSize: RF(17),
      textTransform: 'capitalize',
      color: palette.primary,
    },
    titleAndPriceView: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      width: '92%',
      alignSelf: 'center',
    },
    priceText: {
      fontFamily: family.PoppinsMedium,
      fontSize: RF(15),
      color: palette.primary,
      marginTop: 2,
    },
  });
};
export default styles;
