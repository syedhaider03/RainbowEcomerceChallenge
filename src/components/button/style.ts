import {family, palette} from 'theme';
import {HDP, HiP, IS_IOS, RF, WiP} from 'helpers';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: HDP(50),
    width: WiP(90),
    alignSelf: 'center',
    borderRadius: HDP(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    width: HDP(44),
    height: HDP(44),
    borderRadius: HDP(22),
    backgroundColor: palette.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  squareBorderButton: {
    width: HDP(44),
    height: HDP(44),
    borderWidth: 1,
    borderColor: palette.primary,
    borderRadius: HDP(4),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
  },
  borderedButton: {
    backgroundColor: palette.white,
    borderWidth: 1.2,
    borderColor: palette.primary,
  },
  slimButton: {
    width: WiP(80),
    alignSelf: 'flex-end',
    height: HDP(44),
    borderRadius: 4,
  },
  buttonText: {
    color: palette.white,
    fontSize: RF(17),
    fontFamily: family.PoppinsMedium,
  },
  buttonTextLight: {
    color: palette.lightPurple2,
    fontSize: RF(17),
    fontFamily: family.PoppinsMedium,
  },
  lightButtonText: {
    color: palette.primary,
    fontSize: RF(18),
    fontFamily: family.PoppinsMedium,
    marginLeft: 8,
  },
  smallBorderedButton: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: palette.beetrootRed,
    height: HDP(26),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: HDP(10),
    paddingHorizontal: 8,
    marginRight: 10,
  },
  buttonSmLabel: {
    color: palette.red,
    fontSize: RF(12),
    fontFamily: family.PoppinsRegular,
  },
  labelActive: {color: palette.white},
});
export default styles;
