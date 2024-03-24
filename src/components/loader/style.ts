import {palette} from 'theme';
import {HDP, HiP, RF, WiP} from 'helpers';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:HDP(20)
  },
  loadingText: {
    fontSize: RF(15),
    color: palette.primary,
    marginTop: HDP(5),
  },
  loadingTextLg: {
    fontSize: RF(16),
    color: palette.primary,
    marginTop: HDP(5),
    textAlign: 'center',
  },
  horizontalContainer: {
    width: HDP(100),
    height: HDP(301),
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerContainer: {
    top: HiP(45),
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerSquare: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: palette.BG,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
