import { RF, WiP } from 'helpers';
import {StyleSheet} from 'react-native';
import { palette } from 'theme';

const styles = StyleSheet.create({
  container: {
    width: WiP(80),
    height: 180,
    borderRadius: 10,
    overflow: 'hidden',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: palette.overlay,
    padding: 10,
  },
  categoryPill: {
    alignSelf: 'flex-end',
    backgroundColor: palette.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  categoryText: {
    color: palette.white,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    marginRight: 10,
  },
  logo: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  textContainer: {
    // flex: 1,
    marginTop: 10,
  },
  companyName: {
    color: palette.white,
    fontSize: RF(16),
    fontWeight: '500',
  },
  details: {
    color: palette.white,
  },
  headline: {
    color: palette.white,
    fontWeight: 'bold',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
});

export default styles;
