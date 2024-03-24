import {HDP, RF, WiP} from 'helpers';
import {StyleSheet} from 'react-native';
import {family, palette} from 'theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: HDP(27),
    height: HDP(27),
    backgroundColor: palette.primary,
    justifyContent: 'center',
    borderRadius: 14.7,
    borderWidth: 1,
    borderColor: palette.primary,
    position: 'absolute',
    right: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  mainButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    backgroundColor: 'blue',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  iconText: {
    color: 'white',
    fontSize: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  removeButton: {
    backgroundColor: palette.primary,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    padding: 10,
  },
  addButton: {
    backgroundColor: palette.primary,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  quantityText: {
    fontSize: RF(18),
    marginHorizontal: 10,
    flex: 1,
    fontFamily: family.PoppinsMedium,
    textAlign: 'center',
  },
});

export default styles;
