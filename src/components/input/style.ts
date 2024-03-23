import {family, palette} from 'theme';
import {HDP, IS_IOS, RF, WiP} from 'helpers';
import {StyleSheet} from 'react-native';

const styles = () => {
  return StyleSheet.create({
    container: {
      width: WiP(90),
      alignSelf: 'center',
      marginBottom: HDP(13),
    },
    capacityContainer: {},
    label: {
      fontFamily: family.PoppinsMedium,
      fontSize: RF(14),
      color: palette.black,
    },
    textInputView: {
      width: WiP(89),
      borderWidth: 1,
      borderColor: palette.borderColor,
      minHeight: HDP(52),
      marginTop: HDP(8),
      borderRadius: 4,
      flexDirection: 'row',
      backgroundColor: palette.white,
    },
    boxInput: {
      width: WiP(13),
      height: HDP(45),
      borderWidth: 1,
      borderColor: palette.primary,
      borderRadius: 4,
      flexDirection: 'row',
      backgroundColor: palette.white,
      alignItems: 'center',
    },
    capacityTextInput: {
      width: WiP(42),
    },
    currencyView: {
      width: 47,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: palette.borderColor,
    },
    currencyLabel: {
      fontFamily: family.PoppinsLight,
      fontSize: RF(15),
      color: palette.black,
    },
    iconView: {
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInput: {
      fontFamily: family.PoppinsLight,
      fontSize: RF(16),
      flex: 1,
      color: palette.black,
    },
    boxTextInput: {
      fontSize: IS_IOS ? RF(18) : RF(16),
      textAlign: 'center',
      padding: 0,
    },
    textField: {
      paddingLeft: HDP(12),
      height: HDP(122),
      paddingTop: HDP(10),
    },
    countryCodeWrapper: {
      alignItems: 'center',
      marginRight: 10,
      flexDirection: 'row',
      paddingLeft: 10,
    },
    svgDown: {
      marginLeft: 4,
    },
    inputBtnWrapper: {
      flex: 1,
      justifyContent: 'center',
    },
    inputLabelBtn: {
      fontFamily: family.PoppinsLight,
      fontSize: RF(16),
      color: palette.black,
    },
    required: {
      color: palette.red,
    },
    capacitySelectorView: {
      width: 30,
    },
    increaseBtn: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 5,
    },
    decreaseBtn: {
      flex: 1,
      justifyContent: 'flex-start',
    },
    labelDescView:{
      flexDirection:"row",
      justifyContent:"space-between",
      paddingRight:4
    },
    countText:{
      fontFamily:family.PoppinsLight,
      fontSize:RF(13),
      color:palette.greyText
    }
  });
};
export default styles;
