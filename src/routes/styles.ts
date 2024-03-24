import { HDP, RF } from "helpers";
import { StyleSheet } from "react-native";
import { family, palette } from "theme";


const styles = StyleSheet.create({
    tabLabel: {
      fontFamily: family.PoppinsRegular,
      fontSize: RF(12.5),
      color: palette.black,
    },
    focused: {
      color: palette.primary,
    },
    tabbar: {
      borderTopWidth: 0,
      backgroundColor: palette.white,
      shadowColor: palette.primary,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.4,
      shadowRadius: 4.65,
      elevation: 7,
      paddingTop: 5,
    },
    centeredIcon: {
      paddingBottom: HDP(5),
    },
    androidSpecific: {
      paddingBottom: 5,
      height: HDP(60),
    },
  });

  export default styles;