import { HDP, RF, WiP } from 'helpers';
import { StyleSheet } from 'react-native';
import { family, palette } from 'theme';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    listView: {
      flex: 1,
    },
    checkoutView: {
      height: HDP(150),
      borderTopWidth: 1,
      borderTopColor: palette.darkgrey,
      paddingTop: HDP(15),
      paddingHorizontal: WiP(4),
    },
    subtotalView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    subtotalLabel: {
      fontFamily: family.PoppinsRegular,
      fontSize: RF(18),
      color: palette.black,
    },
    shortdescLabel: {
      fontFamily: family.PoppinsRegular,
      fontSize: RF(15),
      color: palette.greyText,
      marginTop: HDP(10),
    },
    priceText: {
      fontFamily: family.PoppinsSemiBold,
      fontSize: RF(18),
      color: palette.black,
    },
    buttonWrapper: {
      height: HDP(70),
      // marginTop: HDP(20),
      flexDirection: 'row',
      backgroundColor: palette.white,
      width: WiP(100),
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: HDP(10),
    },
    mainButton: {
      width: WiP(44),
      height: HDP(44),
      borderRadius: 0,
      elevation: 0,
    },
    cancelButton: {
      width: WiP(44),
      height: HDP(44),
      borderRadius: 3,
      backgroundColor: palette.white,
      marginRight: HDP(10),
      borderWidth: 2,
      borderColor: palette.darkgrey,
      shadowOpacity: 0,
      elevation: 0,
    },
    btnLabelStyle: {
      color: palette.black,
      fontFamily: family.PoppinsRegular,
      fontSize: RF(16),
    },
    separatorLg: {
      height: 10,
      borderBottomWidth: 1,
      borderColor: palette.darkgrey,
    },
  });

export default styles