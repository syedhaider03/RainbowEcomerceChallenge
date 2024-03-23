import {family, palette} from 'theme';
import {HDP, RF, WiP} from 'helpers';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descText: {
    fontFamily: family.PoppinsRegular,
    fontSize: RF(15),
    color: palette.primary,
  },
  descText2: {
    fontFamily: family.PoppinsRegular,
    fontSize: RF(14),
    color: palette.black,
  },
  buttonContainer: {
    marginLeft: WiP(1),
  },
  label: {
    fontFamily: family.PoppinsRegular,
    fontSize: RF(18),
    color: palette.primary,
  },
  label2: {
    fontFamily: family.PoppinsMedium,
    fontSize: RF(14),
    textDecorationLine: 'underline',
    color: palette.lightPurple2,
  },
  twoLetterLabel: {
    fontFamily: family.PoppinsMedium,
    fontSize: RF(14),
    color: palette.black,
    textTransform: 'capitalize',
  },
  disabledText: {
    opacity: 0,
  },
  filler: {},
  highlightBtn: {
    flex: 0.11,
    backgroundColor: palette.lightColorGreyBtn,
    borderRadius: 2,
    height: HDP(32),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  activeBtnStyle: {
    backgroundColor: palette.primary,
  },
  activeBtnLabelStyle: {
    color: palette.white,
  },
});
export default styles;
