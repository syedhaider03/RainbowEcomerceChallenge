import {family, palette} from 'theme';
import {HDP, RF} from 'helpers';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  heading: {
    fontFamily: family.PoppinsSemiBold,
    fontSize: RF(32),
    color: palette.primary,
    textTransform: 'capitalize',
  },
  headingSmall: {
    fontFamily: family.PoppinsMedium,
    fontSize: RF(22),
    color: palette.black,
    textTransform: 'capitalize',
  },
  priceLabel: {
    fontFamily: family.PoppinsSemiBold,
    fontSize: RF(18.5),
    color: palette.orange,
  },
  descriptionLabel: {
    fontFamily: family.PoppinsLight,
    fontSize: RF(15),
    color: palette.placeholderColor,
    marginTop: HDP(10),
    lineHeight:19
  },
  buttonLabel: {
    color: palette.primary,
    fontFamily: family.PoppinsSemiBold,
    fontSize: RF(13),
    alignSelf: 'flex-end',
    backgroundColor: palette.white,
    paddingHorizontal: 6,
  },
  supportingText:{
    fontSize: RF(12),
    fontFamily: family.PoppinsRegular,
    color:palette.greyText,
    textTransform:"lowercase"
  }
});
export default style;
