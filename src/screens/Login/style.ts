import {family, palette} from 'theme';
import {HDP, HiP, RF, WiP} from 'helpers';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WiP(90),
    alignSelf: 'center',
    paddingTop: HDP(35),
  },
  inputView: {
    marginTop: HDP(35),
    marginBottom: HiP(3),
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
    marginTop: HDP(30),
  },
  socialButtonWrapper: {
    marginTop: HDP(20),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  continueAsGuestBtn: {
    backgroundColor: palette.white,
    borderWidth: 1,
    marginTop: 20,
    shadowOpacity: 0,
    borderColor: palette.grey,
    borderRadius: 4,
    height: 45,
  },
});
export default styles;
