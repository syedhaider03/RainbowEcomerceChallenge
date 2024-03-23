import {palette} from 'theme';
import {HDP, HiP, RF, WiP} from 'helpers';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
    width: WiP(93),
    alignSelf: 'center',
  },
  image: {
    width: 120,
    height: 140,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  category: {
    fontSize: RF(16),
    color: '#757575',
    marginBottom: 4,
  },
  headline: {
    fontSize: RF(19),
    fontWeight: 'bold',
    marginBottom: 8,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 6,
  },
  authorName: {
    fontSize: RF(14),
    marginRight: 4,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 3,
    backgroundColor: palette.darkgrey,
    marginRight: 4,
    marginTop: 2,
  },
  hoursAgo: {
    fontSize: RF(14),
    color: '#757575',
  },
});

export default styles;
