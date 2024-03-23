import { RF } from 'helpers';
import {StyleSheet} from 'react-native';
import { palette } from 'theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 10,
    marginTop: 10,
  },
  scrollView: {
    marginVertical: 10,
    marginLeft: 5,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  activeTab: {
    backgroundColor: palette.primary,
  },
  inactiveTab: {
    backgroundColor: palette.grey,
  },
  tabText: {
    color: palette.black,
    fontSize: RF(16),
    textTransform:"capitalize"
  },
  activeTabText: {
    color: palette.white,
    fontSize: RF(16),
  },
});


export default styles;
