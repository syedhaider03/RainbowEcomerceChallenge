import { RF } from 'helpers';
import {StyleSheet} from 'react-native';
import { palette } from 'theme';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorName: {
    fontSize: RF(17),
    color:palette.greyText
  },
  date: {
    fontSize: RF(17),
    color:palette.greyText
  },
  category: {
    fontSize: RF(17),
    color:palette.greyText
  },
});

export default styles;
