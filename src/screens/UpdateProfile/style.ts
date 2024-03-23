import {family, palette} from 'theme';
import {HDP, RF, WiP} from 'helpers';
import {StyleSheet} from 'react-native';

const styles =  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: palette.white,
    },
    container: {
      flex: 1,
      width: WiP(100),
      alignSelf: 'center',
      paddingTop: HDP(15),
    },
    imageContainer: {
      marginTop: 20,
    },
    heading: {
      fontFamily: family.PoppinsRegular,
      fontSize: RF(14),
      color: palette.black,
      paddingLeft: WiP(5),
    },
    categoriesWrapper: {
      width: WiP(90),
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignContent: 'center',
      marginTop: HDP(15),
      alignSelf: 'center',
    },
    buttonWrapper: {
      height: HDP(70),
      // marginTop: HDP(20),
      flexDirection: 'row',
      backgroundColor: palette.white,
      width: WiP(100),
      justifyContent: 'center',
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
  });
export default styles;
