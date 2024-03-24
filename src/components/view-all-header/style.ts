import { RF } from 'helpers';
import {StyleSheet} from 'react-native';
import { palette } from 'theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 1,
    paddingBottom: 8,
  },
  title: {
    fontSize: RF(20),
    fontWeight: 'bold',
    textTransform:'capitalize'
  },
  viewAll: {
    fontSize: RF(17),
    color: palette.primary,
  },
});


export default styles;
