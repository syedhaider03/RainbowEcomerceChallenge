import {family, palette} from 'theme';
import {HDP, RF, WiP} from 'helpers';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.white,
    flex: 1,
    width: WiP(90),
    alignSelf: 'center',
    paddingTop: HDP(15),
  },
  inputView: {
    marginTop: HDP(35),
    marginBottom: HDP(20),
  },
  forgotPasswordText: {
    fontFamily: family.PoppinsRegular,
    fontSize: RF(14),
    color: palette.primary,
  },
  forgotBtn: {
    alignSelf: 'flex-end',
  },
  goToNavView: {
    alignSelf: 'center',
    marginTop: HDP(26),
  },
  socialButtonWrapper: {
    marginTop: HDP(20),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    marginTop: -20,
  },
});
export default styles;
