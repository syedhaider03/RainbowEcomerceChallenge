import { HDP, RF, WiP } from "helpers";
import { StyleSheet } from "react-native";
import { family, palette } from "theme";

const styles = StyleSheet.create({
    container: {
      width: WiP(93),
      height: HDP(150),
      alignSelf: 'center',
      marginTop: 20,
    },
    topView: {
      flexDirection: 'row',
      flex: 1,
    },
    imageView: {
      width: WiP(20),
      height: HDP(70),
      borderWidth: 1,
      borderColor: palette.darkgrey,
      borderRadius: 7,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: WiP(15),
      height: HDP(50),
    },
    detailsView: {
      paddingLeft: 10,
      justifyContent: 'space-between',
      height: HDP(70),
    },
    title: {
      fontFamily: family.PoppinsMedium,
      fontSize: RF(18),
      color: palette.black,
      width: WiP(52),
    },
    specsView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    specNameLabel: {
      fontFamily: family.PoppinsRegular,
      fontSize: RF(14),
      color: palette.greyText,
    },
    specNameValue: {
      fontFamily: family.PoppinsMedium,
      fontSize: RF(14),
      color: palette.black,
      textTransform: 'capitalize',
    },
    priceView: {
      alignItems: 'flex-end',
      flex: 1,
    },
    priceText: {
      fontFamily: family.PoppinsSemiBold,
      fontSize: RF(18),
      color: palette.primary,
    },
    bottomView: {
      flex: 0.6,
      justifyContent: 'space-between',
      marginLeft: WiP(22),
      flexDirection: 'row',
      alignItems: 'center',
    },
    deleteView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    removeLabel: {
      fontFamily: family.PoppinsRegular,
      fontSize: RF(15),
      color: palette.beetrootRed,
    },
  });

  export default styles;