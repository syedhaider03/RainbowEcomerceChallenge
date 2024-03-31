import {family, palette} from 'theme';
import {HDP, HiP, IS_IOS, RF, WiP} from 'helpers';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const styles = () => {
  const {bottom} = useSafeAreaInsets();
  const paddingBottom = IS_IOS ? bottom : bottom + 10;
  return StyleSheet.create({
    CPcontainer: {
      width: WiP(100),
      backgroundColor: palette.white,
      alignSelf: 'center',
      position: 'absolute',
      borderTopRightRadius: 12,
      borderTopLeftRadius: 12,
      bottom: -bottom,
      paddingBottom,
    },
    handleBar: {
      width: HDP(56),
      height: HDP(2.42),
      borderRadius: 2.5,
      backgroundColor: palette.handleBar,
      alignSelf: 'center',
      marginTop: HDP(20),
      marginBottom: HDP(10),
    },
    headingGreen: {
      fontFamily: family.PoppinsSemiBold,
      fontSize: RF(22),
      color: palette.success,
      marginTop: HDP(20),
      width: WiP(90),
      alignSelf: 'center',
      textAlign: 'center',
    },
    headingLogout: {
      fontFamily: family.PoppinsMedium,
      fontSize: RF(18),
      color: palette.black,
      marginTop: HDP(25),
      width: WiP(90),
      alignSelf: 'center',
    },
    heading: {
      fontFamily: family.PoppinsMedium,
      fontSize: RF(18),
      color: palette.black,
      marginTop: HDP(16),
      width: WiP(90),
      alignSelf: 'center',
    },
    createActivityLabel: {
      fontFamily: family.PoppinsMedium,
      fontSize: RF(21),
      color: palette.black,
      marginTop: HDP(10),
      alignSelf: 'center',
      marginBottom: HDP(15),
    },
    subHeadingLabel: {
      fontFamily: family.PoppinsMedium,
      fontSize: RF(18),
      color: palette.black,
      marginTop: HDP(20),
      alignSelf: 'center',
    },
    modalGeneralHeading: {
      fontFamily: family.PoppinsSemiBold,
      fontSize: RF(22),
    },
    descriptionText: {
      width: WiP(89),
      fontFamily: family.PoppinsRegular,
      color: palette.greyText,
      alignSelf: 'center',
      textAlign: 'center',
      marginVertical: HDP(12),
    },
    descriptionTextLocation: {
      width: WiP(90),
      fontFamily: family.PoppinsRegular,
      color: palette.greyText,
      alignSelf: 'center',
      marginTop: HDP(12),
    },
    circleAnimation: {
      width: HDP(100),
      height: HDP(100),
      alignSelf: 'center',
    },
    successAnimation: {
      width: HDP(120),
      height: HDP(120),
      alignSelf: 'center',
    },
    buttonWrapper: {
      marginVertical: HDP(30),
      marginTop: HDP(25),
      flexDirection: 'row',
      alignSelf: 'center',
    },
    buttonWrapperSuccessCreate: {
      marginBottom: HDP(10),
      marginTop: HDP(25),
      flexDirection: 'row',
      alignSelf: 'center',
    },
    bottomSpacer: {
      marginVertical: HDP(15),
    },
    mainButton: {
      width: WiP(44),
      height: HDP(44),
      borderRadius: 0,
      elevation: 0,
      backgroundColor: palette.primary,
    },
    bgMainButton: {
      height: HDP(47),
      borderRadius: HDP(4),
    },
    cancelButton: {
      width: WiP(44),
      height: HDP(44),
      borderRadius: 3,
      backgroundColor: palette.white,
      marginRight: HDP(10),
      borderWidth: 2,
      borderColor: palette.darkgrey,
      shadowOpacity: 0,
      elevation: 0,
    },
    btnLabelStyle: {
      color: palette.black,
      fontFamily: family.PoppinsRegular,
      fontSize: RF(16),
    },
    wrapperView: {
      flexDirection: 'row',
      alignItems: 'center',
      width: WiP(88),
      alignSelf: 'center',
      justifyContent: 'space-between',
    },
    wrapperViewCustom: {
      flexDirection: 'row',
      alignItems: 'center',
      width: WiP(92),
      alignSelf: 'center',
      justifyContent: 'space-between',
    },
    crossBtn: {
      width: 50,
      alignItems: 'center',
      left: 10,
    },
    leaveActivityCross: {
      alignSelf: 'flex-end',
      marginRight: HDP(25),
      marginTop: HDP(25),
    },
    locationModalContainer: {
      alignItems: 'flex-start',
      paddingTop: HDP(20),
    },
    locImage: {
      marginLeft: WiP(3),
    },
    filterContainer: {
      width: WiP(100),
      height: HiP(85),
      backgroundColor: palette.white,
      bottom: -bottom,
      position: 'absolute',
      borderTopRightRadius: 12,
      borderTopLeftRadius: 12,
      paddingBottom: paddingBottom + 10,
      alignSelf: 'center',
      paddingTop: HDP(20),
      // paddingLeft: WiP(6),
    },
    categoryHeading: {
      marginTop: HDP(10),
    },
    scaleValueSwitch: {transform: [{scaleX: 0.8}, {scaleY: 0.8}]},
    datePills: {flexDirection: 'row'},
    commonLeaveCancelText: {
      textAlign: 'auto',
      marginBottom: 0,
      marginTop: 13,
    },
    linkText: {
      fontFamily: family.PoppinsSemiBold,
      color: palette.primary,
      textDecorationLine: 'underline',
    },
    sadImage: {
      height: HDP(120),
      width: HDP(120),
      alignSelf: 'center',
      resizeMode: 'contain',
    },
    thinCenterHeading: {
      fontSize: RF(19),
      textAlign: 'center',
      fontFamily: family.PoppinsRegular,
      color: palette.black,
    },
    fatCenterHeading: {
      fontSize: RF(25),
      textAlign: 'center',
      fontFamily: family.PoppinsSemiBold,
      color: palette.success,
      marginTop: HDP(20),
    },
    centerAlignWithCustomMargin: {marginTop: HDP(15), textAlign: 'center'},
    agreeContainer: {},
    successView: {
      paddingBottom: 15,
    },
    scheduleText: {
      fontFamily: family.PoppinsRegular,
      fontSize: RF(17),
      color: palette.black,
    },
    joinedListWrapper: {
      marginTop: HDP(10),
      width: WiP(90),
      alignSelf: 'center',
    },
    updateProfileLabel: {
      fontFamily: family.PoppinsMedium,
      fontSize: RF(17),
      alignSelf: 'center',
      width: WiP(85),
      marginBottom: 10,
      color: palette.primary,
    },
    link: {
      fontSize: RF(17),
      fontFamily: family.PoppinsMedium,
      color: palette.red,
      textDecorationLine: 'underline',
    },
    bookingSlotView: {
      width: '100%',
      borderRadius: 0,
      marginBottom: 0,
    },
    bookingSlotViewHost: {
      width: '93%',
      borderRadius: 5,
      marginBottom: 0,
      alignSelf: 'center',
      marginTop: HDP(20),
    },
    cancelAppointmentBtn: {
      width: WiP(92),
      alignSelf: 'center',
      marginTop: HDP(20),
    },
    userDetailsView: {
      width: '92%',
      alignSelf: 'center',
    },
    connectionmodal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    connectionModalContainer: {
      backgroundColor: '#fff',
      paddingHorizontal: 16,
      paddingTop: 20,
      paddingBottom: 40,
      alignItems: 'center',
    },
    connectionModalTitle: {
      fontSize: RF(22),
      fontFamily: family.PoppinsSemiBold,
    },
    conenctionmodalBody: {
      fontSize: RF(18),
      color: '#555',
      marginTop: 14,
      textAlign: 'center',
      marginBottom: 10,
      fontFamily: family.PoppinsRegular,
    },
    button: {
      backgroundColor: palette.primary,
      paddingVertical: 12,
      paddingHorizontal: 16,
      width: '100%',
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: RF(20),
    },
    connectionHeaderView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    wifiImg: {
      width: HDP(23),
      height: HDP(23),
      marginRight: WiP(2),
      marginBottom: HDP(3),
    },
    connectionCircleAnimation: {
      width: WiP(50),
      height: HDP(150),
    },
    headerSkeletonView: {
      height: HDP(30),
    },
    bodySkeletonView: {
      height: HDP(18),
      width: WiP(88),
    },
    categoryHeader: {
      backgroundColor: palette.white,
      minHeight: HDP(30),
      justifyContent: 'center',
      paddingVertical: 5,
      // marginTop:HDP(15)
    },
    listSeprator: {
      marginTop: HDP(15),
    },
    itemSeprator: {
      marginTop: HDP(10),
    },
    categoryHeadingText: {
      // color:palette.primary
      // marginTop: HDP(10),
    },
    serviceFilterView: {
      height: HiP(85),
    },
    capitalize: {textTransform: 'capitalize'},
    imagePermIcon: {
      width: 55,
      height: 55,
      marginLeft: 10,
    },
    mediumRectangeLoader: {
      height: HDP(30),
      marginTop: 3,
      width: WiP(60),
    },
    actionButtonsWrapper: {
      flexDirection: 'row',
      marginTop: HDP(15),
      alignSelf: 'center',
      width: WiP(92),
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    descriptionInput: {
      height: HDP(152),
    },
    reportIssueBtn: {
      width: WiP(90),
      height: HDP(44),
      elevation: 0,
      backgroundColor: palette.primary,
      marginVertical: HDP(20),
      borderRadius: 5,
    },
    doneText: {
      fontFamily: family.PoppinsRegular,
      fontSize: RF(16),
      color: palette.blueText,
    },
    doneBtn: {
      borderWidth: 0.6,
      borderColor: palette.blueText,
      paddingHorizontal: 10,
      paddingVertical: 5,
      width: 'auto',
      borderRadius: 6,
    },
    quotaView: {
      flexDirection: 'row',
      width: WiP(88),
      alignSelf: 'center',
      marginBottom: 20,
      alignItems: 'center',
      paddingRight: 10,
      marginLeft: -10,
    },
    quotaText: {
      fontFamily: family.PoppinsRegular,
      fontSize: RF(15),
      marginLeft: 10,
    },
    boldText: {
      fontFamily: family.PoppinsMedium,
      fontSize: RF(16),
      color: palette.black,
      marginBottom:10
    },
    container: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    closeButton: {
      padding: 10,
    },
    cardDetails: {
      marginBottom: 20,
    },
    cardImage: {
      // Styles for card image container
    },
    input: {
      borderWidth: 1,
      borderColor: palette.borderColor,
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginBottom: 10,
      flex:1
    },
    marginRight:{
      marginRight:10,
      flex:2
    },
    addressSection: {
      marginBottom: 20,
    },
    addressLabel: {
      fontSize: 16,
      marginBottom: 10,
    },
    headerLabel: {
      fontSize: 16,
      marginLeft:10,
      
    },
    addressField: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    addressInput: {
      flex: 1,
      borderColor: palette.borderColor,
      borderRadius: 5,
      paddingLeft: 15,
      marginRight: 10,
      paddingRight:5,
    },
    payNowButton: {
      backgroundColor: palette.primary,
      borderRadius: 5,
      paddingVertical: 15,
      alignItems: 'center',
    },
    payNowText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    itemTotal: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    itemTotalLabel: {
      fontSize: 16,
    },
    itemTotalValue: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    cardInput:{
      flexDirection:"row",
      alignItems:'center',
      width:"100%"
    },
    cardInputHeader: {
      flexDirection: 'row',
      marginBottom: 10,
      alignItems:'center'
    },
  });
};
export default styles;
