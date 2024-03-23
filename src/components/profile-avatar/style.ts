import {family, palette} from 'theme';
import {HDP, RF, WiP} from 'helpers';
import {StyleSheet} from 'react-native';

const styles =  StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: palette.BG,
    },
    avatar: {
      width: HDP(105),
      height: HDP(105),
      borderRadius: HDP(57.5),
    },
    initialView: {
      width: HDP(105),
      height: HDP(105),
      borderRadius: HDP(57.5),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: palette.lightPrimary,
      padding: 6,
    },
    avatarWrapper: {
      width: HDP(105),
      height: HDP(105),
      borderRadius: HDP(57.5),
    },
    shadowView: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      backgroundColor: palette.white,
      width: HDP(105),
      height: HDP(105),
      borderRadius: HDP(57.5),
    },
    addBtn: {
      width: HDP(30),
      height: HDP(30),
      borderRadius: HDP(15),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: palette.primary,
      position: 'absolute',
      bottom: 5,
      right: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      zIndex:9999
    },
    nameLabel: {
      fontFamily: family.PoppinsSemiBold,
      fontSize: RF(25),
      marginTop: HDP(20),
      color: palette.black,
      textTransform: 'capitalize',
    },
    emailLabel: {
      fontFamily: family.PoppinsLight,
      fontSize: RF(15),
      color: palette.black,
      marginLeft: HDP(5),
    },
    emailWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: HDP(10),
      width:"90%",
      textAlign:'center'
    },
    initialLabel: {
      fontFamily: family.PoppinsBold,
      fontSize: RF(50),
      color: palette.white,
    },
    marginXtra: {marginTop: HDP(5)},
    nameLoader: {
      marginTop: HDP(20),
      height: HDP(25),
      width: WiP(35),
    },
    emailLoader: {
      marginTop: HDP(8),
      height: HDP(15),
      width: WiP(65),
    },
    phoneLoader: {
      marginTop: HDP(5),
      height: HDP(15),
      width: 150,
    },
    avatarLoader: {
      width: 105,
      height: 105,
      borderRadius: 52.5,
    },
  });
export default styles;
